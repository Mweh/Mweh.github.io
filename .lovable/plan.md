# Make the portfolio independently deployable (GitHub Pages)

## Goal
The GitHub repository alone is enough to build and deploy the site. Lovable stays a development tool only. No backend, database, auth or server runtime at production time.

## What changes

1. **Static output instead of a server**
   - Turn on TanStack Start's built-in prerendering so `npm run build` writes real HTML files for every page: `/`, `/work`, `/resume`, and every published `/work/<slug>` (brimo, mytelkomsel, koalafit, mindmories, marble, one-more-inch).
   - Because each case study exists as its own `work/koalafit/index.html`, directly opening `https://<user>.github.io/work/koalafit` returns the page, not a 404. No hash routing, no redirect hacks.
   - Slugs are read from `src/data/projects.ts`, so adding a project automatically adds its page.
   - Add a static `404.html` (the existing not-found page) for truly unknown URLs.

2. **Sitemap and robots become static files**
   - Replace the server-generated `sitemap.xml` route with a small build step that writes `sitemap.xml` from the same project data. `robots.txt` stays static.

3. **Site address is configurable, not hard-coded to Lovable**
   - `siteUrl` moves out of the Lovable preview domain to an env value (`SITE_URL`) with a clear placeholder default.
   - Support a base path (`BASE_PATH`) so it works both as a user site (`fahmi.github.io/`) and a project site (`fahmi.github.io/portfolio/`). Links go through the router, so they respect the base automatically.

4. **GitHub Actions deploy**
   - `.github/workflows/deploy.yml`: on push to `main` → `npm ci` → `npm run build` → upload the static folder → deploy to GitHub Pages. Includes `.nojekyll`.
   - Uses only standard npm commands; no Lovable tokens or secrets.

5. **Dependency audit for Lovable coupling**
   - `@lovable.dev/vite-tanstack-config` is a public npm dev-only build helper (bundles the Vite plugins). It is not shipped to visitors and needs no Lovable account. Keep it so the Lovable preview keeps working; document it and add a note on how to swap it for plain Vite plugins if ever needed.
   - Confirm no runtime code imports anything from Lovable, and no Lovable Cloud is used (it is not enabled today).

6. **Documentation**
   - README: clone → `npm ci` → `npm run dev` / `npm run build` / `npm run preview`; setting `SITE_URL` and `BASE_PATH`; enabling GitHub Pages ("Source: GitHub Actions"); custom domain via `CNAME`; how to test deep links locally.
   - AGENTS.md: add rule "Production is static; no server routes, backend or Lovable runtime dependencies" with a one-line why. Update `docs/ARCHITECTURE.md` deployment section.

## Verification before calling it done
- Run the production build and check the output folder contains an HTML file for every route and the sitemap.
- Serve the output folder with a plain static server and open `/work/koalafit`, `/work/mindmories`, `/work/marble`, `/work/brimo` directly (fresh tab, no prior navigation) — each must load with correct title, no 404, no console errors.
- Also test under a sub-path (`BASE_PATH=/portfolio/`) and an unknown URL shows the 404 page.

## One thing I need from you
Will the site live at `fahmi.github.io` (repo named `<username>.github.io`), a project repo (`github.io/<repo>`), or a custom domain? The plan supports all three; your answer just sets the defaults.

## Technical details
- Prerender config via `tanstackStart: { prerender: { enabled: true, crawlLinks: true }, pages: [...] }` in `vite.config.ts`, with the pages list derived from project data; nitro preset set to static.
- `src/routes/sitemap[.]xml.ts` removed; replaced by a Vite build hook or `scripts/generate-sitemap.ts` run in `postbuild`.
- `src/server.ts` SSR wrapper is unused by static output; kept only for dev.
