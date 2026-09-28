// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { publishedProjects } from "./src/data/projects";

// Every page is prerendered to a static HTML file at build time, so the site
// deploys to any static host (GitHub Pages) and deep links like
// /work/koalafit resolve to work/koalafit/index.html — never a 404.
const pages = [
  { path: "/" },
  { path: "/work" },
  { path: "/resume" },
  ...publishedProjects.map((p) => ({ path: `/work/${p.slug}` })),
];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
