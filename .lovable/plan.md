# Portfolio v2 — Align the built site with the full brief

Most of the brief is already built (static GitHub Pages site, centralized typed data, shared case-study page, no new dependencies). This plan covers only the gaps between the current site and the new brief. Nothing changes until you approve.

## A. Current repository assessment (short)

- Framework: TanStack Start v1 (React 19, TypeScript), Tailwind v4, prerendered to static HTML for GitHub Pages. No backend, no Lovable runtime.
- Routes: `/`, `/work`, `/work/$slug` (brimo, mytelkomsel, koalafit, mindmories, marble, one-more-inch), `/resume`, static 404.
- Content: `src/data/profile.ts`, `projects.ts`, `experience.ts`, `freelance.ts`, `skills.ts`, `socialLinks.ts`. Missing facts shown as dashed "To be added" labels.
- Reuse: everything. Folder layout stays (`src/routes/` + `src/components/pages/` instead of `src/pages/` + `App.tsx`, because this router only reads `src/routes/`; already documented).

## Gaps found against the brief

| Brief section | Current state | Change |
|---|---|---|
| 4, 5, 14 Years of experience | Mixed: "5+" in title line, "3+" in hero sentence (your earlier edit) | Use one value everywhere from `profile.experienceYears`. Default: 3+ (your latest edit). Tell me if it should be 5+ |
| 6, 14 Experience must lead with production work | Academy listed first, then freelance, then professional | Reorder: Professional (BRImo, MyTelkomsel) → International freelance → Apple Developer Academy |
| 2 Homepage order | Hero, Work, Experience, Freelance, Skills, About, Contact | Fold Freelance into Experience (Netherlands / US entries as a sub-block). Result: Hero, Selected Work, Experience, Skills, About, Contact |
| 21 Navigation | Work (goes to /work page), Resume, Contact | Work, Experience, About, Resume, Contact. Work/Experience/About/Contact scroll to home sections; Resume is a page. Same on mobile menu |
| 7 Curation, unequal weight | 6 equal cards | Production + KoalaFit as large cards; MindMories and Academy projects as a compact row below |
| 8 Card information | Category, title, description, role, tech | Add project type label (e.g. "Professional / Production"), and evidence links shown only when real (App Store, GitHub, Case Study). Production cards show "Production app — source not public" instead of any repo link |
| 12 Case-study opening | Starts with numbered sections | Add a quick-facts header: Category, Role, Contribution, Technology, Summary, Outcome (only if verified) |
| 12 "Do not force all ten sections" | Every project shows all 10, mostly placeholders | Show only sections that have content. Missing important fields (role, contribution) still show one visible placeholder; the rest are simply omitted |
| 30 Social preview image | None | One plain typographic preview card (name, title, tech line) as a static image — not a screenshot. Used on home only |
| 9 Links | Link data exists | Keep; confirm no link renders unless it is a real URL |

Everything else in the brief (motion, reduced motion, mobile-first, accessibility, performance, GitHub Pages routing, SEO, docs) is already in place and will only be re-checked.

## B–D. Architecture and design

Unchanged from the approved plan: same folders, data model, tokens (warm paper, ink, one cobalt accent, Geist / Geist Mono), CSS-only motion, zero new packages. Small data-model additions only:

- `Project.type` label and `Project.evidence` note (e.g. production, no public source).
- Case-study sections become optional fields.
- `size: "large" | "compact"` for Selected Work weighting (or derived from category).

## E. Self-review

- Over-engineering: no new libraries or state; changes are data fields and small component tweaks.
- Content integrity: no new facts. Placeholders reduced visually, not replaced with invented text.
- Routing: in-page nav uses hash links on `/` only; all case-study pages stay prerendered, so direct visits still work.
- Accessibility: nav links get proper labels; section headings keep order after merging Freelance into Experience.

## F. Implementation phases

1. Years value and experience order (data only).
2. Merge Freelance into Experience; update homepage order.
3. Header and mobile menu: Work, Experience, About, Resume, Contact.
4. Selected Work weighting and richer project cards with evidence links.
5. Case-study quick-facts header; hide empty sections.
6. Social preview image and home metadata.
7. Docs (CONTENT_GUIDE: optional sections, evidence links) and production audit: build, direct visits to every `/work/*` URL on a static server, mobile/desktop screenshots, keyboard and reduced-motion pass.

## Still needed from you (anytime)

3+ or 5+ years; GitHub, LinkedIn, Upwork, email; CV PDF; screenshots; employment dates; BRImo / MyTelkomsel responsibilities; freelance project details; App Store / GitHub links for KoalaFit and MindMories.
