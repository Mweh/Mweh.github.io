# Muhammad Fahmi — iOS Developer Portfolio

Personal portfolio for recruiters (Jakarta banks, telcos, tech companies) and international freelance clients (Upwork). Curated case studies, centralized typed content, no backend.

## Stack

TanStack Start (React 19, SSR) · Vite · TypeScript · Tailwind CSS v4. No CMS, no database, no animation or state libraries.

## Run

```sh
bun install
bun run dev      # http://localhost:8080
bun run build    # production build
bun run preview
```

Deploys as a standard TanStack Start app (default target: Cloudflare Workers via Nitro).

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

Missing information is written as `ph("what is missing")` and shows on the site as a dashed "To be added" label. Search for `ph(` to find everything still to fill in.

## Add a project

Append one object to the array in `src/data/projects.ts`. The card, `/work/<slug>` page, work index, sitemap and metadata are generated from it. See `docs/CONTENT_GUIDE.md`.

## Docs

- `AGENTS.md` — rules for coding agents
- `docs/ARCHITECTURE.md` — routing, data model, components, styling, assets
- `docs/CONTENT_GUIDE.md` — writing and adding content
