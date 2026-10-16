/**
 * Writes sitemap.xml + robots.txt into the static build output after `vite build`.
 * Plain Node (no Bun/TS runner needed) so `npm run build` works anywhere, incl. GitHub Actions.
 * The URL list is derived from the prerendered pages (every `<route>/index.html`),
 * so it always matches what was actually built.
 */
import { writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

// Keep in sync with the default in src/data/profile.ts.
const siteUrl = (process.env.VITE_SITE_URL || "https://mweh.github.io").replace(/\/$/, "");

// Static prerender output lands in .output/public (Nitro build) or dist/client.
const candidates = [".output/public", "dist/client", "dist"];
const outDir = candidates.find((d) => existsSync(join(d, "index.html")));
if (!outDir) {
  console.error("generate-sitemap: no prerendered index.html found in", candidates.join(", "));
  process.exit(1);
}

function collect(dir) {
  const found = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === "assets" || name.startsWith("_") || name.startsWith(".")) continue;
      found.push(...collect(full));
    } else if (name === "index.html") {
      const rel = relative(outDir, dir).split(sep).join("/");
      found.push(rel ? `/${rel}` : "/");
    }
  }
  return found;
}

const paths = collect(outDir).sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

const body =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  paths.map((p) => `  <url><loc>${siteUrl}${p === "/" ? "" : p}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

writeFileSync(join(outDir, "sitemap.xml"), body);
writeFileSync(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`sitemap.xml + robots.txt written to ${outDir} (${paths.length} URLs, origin ${siteUrl})`);
