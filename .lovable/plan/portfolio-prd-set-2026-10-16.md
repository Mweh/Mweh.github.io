# Portfolio PRD set

Create a small set of product requirement documents (PRDs) under `docs/prd/` that describe the portfolio as it is now and the standards it must keep. They are written for you, future developers, and AI agents. Every statement comes from the brief, your instructions, or the current code. Nothing is invented. Open items are marked "To confirm".

## Documents

| # | File | What it covers |
|---|---|---|
| 0 | `README.md` | Index of the PRDs, how to read and update them, and which one wins if two disagree |
| 1 | `01-product-overview.md` | Purpose, target readers (recruiters at Jakarta banks/telcos/tech, engineering managers, interviewers, Upwork clients), goals, non-goals, success criteria ("understand his value in under 30 seconds"), the Claim → Evidence → Optional depth principle |
| 2 | `02-content-strategy.md` | What a portfolio must show and in what order: hero claim, Selected Work, Experience (Professional → Freelance → Academy), Skills, About, Contact, CV. The 10-part case-study structure. Rules for evidence, links, placeholders, tone, banned phrases, and positioning the Academy without looking junior |
| 3 | `03-information-architecture-ux.md` | Pages and navigation, one-page-first home, card hierarchy (large and compact), case-study quick facts, mobile behaviour, the 10-second recruiter scan path |
| 4 | `04-design-system.md` | Typography, colour tokens, spacing, components, motion rules (subtle, reduced-motion safe), list of excluded effects |
| 5 | `05-tech-stack.md` | Chosen stack and why (TanStack Start with static prerender, React, TypeScript, Tailwind v4), dependency policy (no new packages for trivial features), what was ruled out and why |
| 6 | `06-performance.md` | Budgets and targets (Lighthouse 95+, LCP under 2.5s, CLS under 0.1, small JavaScript), image rules (WebP/AVIF, set sizes, lazy loading), fonts, how to measure |
| 7 | `07-code-quality.md` | "Keep it simple" rules: content only in data files, thin routes, one case-study template, small named components, readable naming, no clever abstractions, folder map, checklist before merging |
| 8 | `08-seo-accessibility.md` | Per-page titles and descriptions, social preview image, sitemap, robots, structured data. Accessibility: semantic HTML, one main heading per page, keyboard and focus, contrast, alt text |
| 9 | `09-deployment-operations.md` | Free GitHub Pages user site, GitHub Actions workflow, direct links that never 404, no Lovable or backend needed at runtime, the release checklist |
| 10 | `10-roadmap-open-items.md` | Missing content list (links, email, CV, screenshots, dates, BRImo/MyTelkomsel details, freelance details, 3+ vs 5+ years, Arterious) and suggested future work, with priority |

Each PRD uses the same short layout: Purpose, Requirements (must / should / won't), Acceptance criteria, Current status, Open questions.

## Related updates

- Add a link to `docs/prd/` in the root `README.md` and `AGENTS.md`, so agents read the PRDs before changing the site.
- No changes to the site itself.

## Technical details

- Markdown only. No code, dependency, or build changes.
- Current status lines are checked against the real files (`vite.config.ts`, `src/data/*`, workflow) while writing.
