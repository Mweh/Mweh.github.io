import { createFileRoute } from "@tanstack/react-router";
import { publishedProjects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = ["/", "/work", "/resume", ...publishedProjects.map((p) => `/work/${p.slug}`)];
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          paths.map((p) => `  <url><loc>${absoluteUrl(p)}</loc></url>`).join("\n") +
          `\n</urlset>\n`;
        return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
