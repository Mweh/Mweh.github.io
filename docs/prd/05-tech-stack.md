# PRD 05 — Tech stack

## Purpose

Pick the smallest set of mainstream tools that produces a fast, static, maintainable site.

## Chosen stack

| Tool | Why |
|---|---|
| TanStack Start (React 19) with prerendering | Every page becomes static HTML; file-based routing |
| TypeScript | Typed content model catches missing fields |
| Vite | Fast dev and build |
| Tailwind CSS v4 | Tokens in one CSS file; no config sprawl |
| lucide-react | Small, tree-shaken icons |
| Radix Dialog (via shadcn Sheet) | Accessible mobile menu |

## Dependency policy

**Must**
- Add a package only when it solves something hard (accessibility, security), not trivial things.
- Build with standard `npm ci && npm run build`.

**Won't**
- Animation libraries (Framer Motion, GSAP), smooth-scroll libraries, state managers, CMS, form libraries, backend, database, authentication, Lovable runtime dependencies.

## Ruled out

- Next.js / React Router: framework is fixed; TanStack Start already prerenders.
- Headless CMS: content changes rarely; typed files are simpler.

## Acceptance criteria

- A fresh clone builds with Node 22 and npm, no accounts or secrets.

## Current status

Implemented. `@lovable.dev/vite-tanstack-config` is a build-time public npm package only; replaceable with the plain Vite plugins (see root README).
