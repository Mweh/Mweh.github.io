# PRD 09 — Deployment & operations

## Purpose

The GitHub repository is the source of truth. The site deploys free and runs without Lovable or any backend.

## Hosting decision

- Free GitHub Pages **user site**, public repo `<your-github-username>.github.io`.
- URL: `https://<your-github-username>.github.io`. No custom domain, no paid hosting, no Lovable Cloud.

## Requirements

**Must**
- `npm ci && npm run build` produces `.output/public` with real HTML for every page.
- Direct visits and refreshes on any URL (e.g. `/work/koalafit`) return 200, never 404.
- `.github/workflows/deploy.yml` deploys on push to `main` (and manual run), no secrets.
- `public/404.html` and `public/.nojekyll` included.

**Won't**
- Server runtime, database, authentication.

## Release checklist

1. Typecheck and build pass locally.
2. `npx serve .output/public` and open `/`, `/work`, `/resume`, every `/work/<slug>` directly in a fresh tab.
3. Check `/sitemap.xml` lists all published projects.
4. Push to `main`; confirm the Actions run is green and the live site loads.

## Current status

Implemented and verified locally: all 9 pages, sitemap, robots and 404 return 200 from the static build.
