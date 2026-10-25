# Muhammad Fahmi — iOS Developer Portfolio

Personal portfolio for recruiters (Jakarta banks, telcos, tech companies) and international freelance clients (Upwork). Curated case studies, centralized typed content, no backend.

## Stack

TanStack Start (React 19, SSR) · Vite · TypeScript · Tailwind CSS v4. No CMS, no database, no animation or state libraries.

## Run

```sh
npm ci
npm run dev      # local dev server
npm run build    # static production build -> .output/public
npm run preview
npm test        # project checks, requires Bun (installed automatically in Actions)
```

(`bun install` / `bun run …` work too; only standard npm is required.)

## Deployment (GitHub Pages, free)

The site builds to plain static files in `.output/public` — no server, database, or Lovable account needed at runtime. Every page, including case studies like `/work/koalafit`, is a real HTML file, so direct links and refreshes never 404.

1. Create a **public** repository named `<your-github-username>.github.io` and push this code to its `main` branch.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `.output/public` to `https://<your-github-username>.github.io`.

The site origin is set via `VITE_SITE_URL` (the workflow sets it automatically from your username; locally it defaults to `https://mweh.github.io`). `sitemap.xml` and `robots.txt` are generated at build time by scanning prerendered HTML. Actions runs the project-data tests before building; normal production installation and building still use standard npm.

To test the production build exactly as GitHub Pages serves it:

```sh
npm run build
npx serve .output/public   # then open /work/koalafit directly in a fresh tab
```

Note: `@lovable.dev/vite-tanstack-config` is a public npm package used only at build time (it bundles the Vite plugins). It is not shipped to visitors and needs no Lovable account; to remove it, replace it with the equivalent Vite plugins (`@tanstack/react-start/plugin`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`).

## Where content lives

All content is in `src/data/` — components never contain copy.

| File | Contents |
|---|---|
| `profile.ts` | Name, title, statements, about text, CV path, site URL |
| `socialLinks.ts` | Email, LinkedIn, GitHub, Upwork |
| `projects.ts` | Every project and its case study |
| `experience.ts` | Timeline |
| `freelance.ts` | International freelance entries |
| `skills.ts` | Grouped skills |
| `site.ts` | Shared positioning and section copy |

Missing information is written as `ph("what is missing")`: development shows a dashed "To be added" label, while production shows "Available on request" for retained fields. Search for `ph(` to find everything still to fill in.

## Add a project

Append one object to the array in `src/data/projects.ts`. The card, `/work/<slug>` page, work index, sitemap and metadata are generated from it. See `docs/CONTENT_GUIDE.md`.

## Docs

- `docs/prd/` — product requirement documents (purpose, content, UX, design, stack, performance, code quality, SEO, deployment, roadmap)
- `AGENTS.md` — rules for coding agents
- `docs/ARCHITECTURE.md` — routing, data model, components, styling, assets
- `docs/CONTENT_GUIDE.md` — writing and adding content
