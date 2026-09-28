<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Agent guide

Read `README.md` and `docs/ARCHITECTURE.md` first.

## Architecture rules

- All content lives in `src/data/*.ts`, typed by `src/types/*`. Components render data; never hardcode personal or project copy in components — keeps edits to one place.
- Route files in `src/routes/` stay thin: `head()` + a page component from `src/components/pages/`. No `src/pages/` folder — the router only reads `src/routes/`.
- All case studies render through one route (`work.$slug.tsx`) and one component (`components/project/CaseStudy.tsx`) — never duplicate case-study markup per project.
- Missing content uses `ph()` from `src/lib/placeholder.ts` and renders via `TextValue` — keeps gaps visible and searchable.
- SEO tags come from `buildHead()` in `src/lib/seo.ts`; og:image only on leaf routes with a real absolute image.
- Motion is CSS plus `hooks/use-reveal.ts`; always respect `prefers-reduced-motion` — no animation libraries.
- Styling uses semantic tokens in `src/styles.css` (oklch). No raw color utilities like `text-white` or hex values in components.

## Conventions

- TypeScript, function components, named exports, `@/` imports.
- Small components grouped by role: `layout/`, `sections/`, `project/`, `common/`, `pages/`, `ui/` (shadcn primitives).
- Semantic HTML, one `h1` per page, labeled links, visible focus states.

## Do not

- Fabricate names, dates, metrics, responsibilities, clients, testimonials or screenshots.
- Edit `src/routeTree.gen.ts` (generated).
- Add dependencies for trivial features (animation, state, forms, CMS).
- Add a backend or contact-form infrastructure unless explicitly requested.
- Remove `<Outlet />` from `__root.tsx`.
