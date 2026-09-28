/**
 * Writes sitemap.xml into the static build output after `vite build`.
 * Run via `bun scripts/generate-sitemap.ts` (wired to the `postbuild` script).
 */
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { publishedProjects } from "../src/data/projects";
import { profile } from "../src/data/profile";

const paths = ["/", "/work", "/resume", ...publishedProjects.map((p) => `/work/${p.slug}`)];

const body =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  paths.map((p) => `  <url><loc>${profile.siteUrl}${p === "/" ? "" : p}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

// Static prerender output lands in dist/client (Vite) or .output/public (Nitro).
const candidates = ["dist/client", ".output/public", "dist"];
const outDir = candidates.find((d) => existsSync(join(d, "index.html"))) ?? "dist/client";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "sitemap.xml"), body);
writeFileSync(
  join(outDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${profile.siteUrl}/sitemap.xml\n`,
);
console.log(`sitemap.xml + robots.txt written to ${outDir} (${paths.length} URLs, origin ${profile.siteUrl})`);
