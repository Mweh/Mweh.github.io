# PRD 07 — Code quality ("keep it simple")

## Purpose

Any developer or AI agent should understand and safely change the code within minutes.

## Rules

**Must**
- Content only in `src/data/*.ts`, typed by `src/types/*`. Components render data.
- Route files stay thin: `head()` plus one page component from `src/components/pages/`.
- One case-study route and one `CaseStudy` component for all projects.
- Small function components with named exports and `@/` imports.
- Plain names that say what things are (`ProjectCard`, not `Tile2`).
- Prefer duplication of a few lines over a clever abstraction.

**Won't**
- Edit `src/routeTree.gen.ts`.
- Add global state, custom hooks for one-off logic, or generic "engine" components.
- Leave dead code or unused files behind.

## Folder map

```text
src/routes/        thin route files
src/components/    layout/ sections/ project/ common/ pages/ ui/
src/data/          all content
src/types/         content types
src/lib/           seo.ts, placeholder.ts, utils.ts
src/hooks/         use-reveal.ts
```

## Review checklist

- [ ] Typecheck passes (`bunx tsgo --noEmit` or `npx tsc --noEmit`).
- [ ] `npm run build` succeeds.
- [ ] No copy added inside components.
- [ ] No raw colours.
- [ ] New published project slug added to `projectSlugs` in `vite.config.ts`.
- [ ] Relevant PRD updated.

## Current status

Implemented and documented in `AGENTS.md`.
