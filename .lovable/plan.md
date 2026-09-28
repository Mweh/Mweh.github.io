# Muhammad Fahmi — iOS Developer Portfolio

A premium, editorial portfolio that works for both Jakarta hiring managers and international freelance clients, with curated case studies and all content kept in one place for easy future editing.

## Design step first

Before building, I'll show you three rendered design directions (all premium, minimal, Apple-inspired typography-led — no 3D, no glass, no blobs). You pick one, then I build the whole site in that direction.

## Pages

- **Home** — hero (name, iOS Developer, 5+ years, Swift · SwiftUI · UIKit · Apple Platforms, "View Selected Work" + "Download CV"), Selected Work, Experience timeline, International Freelance, Skills, About with portrait placeholder, Contact.
- **Work** — full list of projects.
- **Case studies** at `/work/koalafit`, `/work/mindmories`, `/work/marble`, `/work/one-more-inch`, `/work/brimo`, `/work/mytelkomsel`, each with the 10-part structure (Context → Problem → Role → Approach → Engineering → Product/UX → Challenges → Outcome → Reflection → Links).
- **Resume** — condensed, printable summary plus CV download link.

## Content rules

Nothing is invented. Only facts from your brief go in. Everywhere information is missing, the site shows a clearly marked placeholder you can replace in one file:

- Employment dates and durations
- BRImo and MyTelkomsel responsibilities, features, outcomes
- Freelance work: `[Netherlands Client / Project]`, `[United States Client / Project]` with role, problem, what you built, contribution, outcome
- Real links: GitHub, LinkedIn, Upwork, email, App Store links
- CV file and all app screenshots (framed placeholder slots, no fake screenshots generated)
- "Arterious" and other academy projects are left as optional slots until you confirm they should be public

## Quality bar

Mobile-first layouts (not squeezed desktop), keyboard focus states, semantic headings, alt text, `prefers-reduced-motion` respected, lazy-loaded images, subtle entrance and hover motion only. Per-page titles, descriptions, Open Graph/Twitter metadata, canonical URLs, sitemap, robots.txt, and Person / CreativeWork structured data.

## Technical notes

- Stack stays as-is: TanStack Start + React + Tailwind v4 tokens in `src/styles.css`. No backend, no CMS, no state library, no new dependencies beyond animation if needed.
- Content layer: `src/data/profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `socialLinks.ts`, typed by `src/types/project.ts` and `src/types/experience.ts`. Adding a project = one object in `projects.ts`.
- Components split into `components/layout`, `components/sections`, `components/project`, reusing existing `components/ui` primitives. Case-study layout is one data-driven component, not duplicated markup.
- Routes: file-based under `src/routes`, case studies via a single `$slug` route reading centralized data.
- Docs written for future agents: `README.md`, `AGENTS.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT_GUIDE.md`. No Lovable-specific coupling.

## Build order

Tokens and typography → data model and types → routing and layout shell → UI primitives → Home sections → KoalaFit case study as the reference → remaining case studies → Work, Resume, Contact → SEO and sitemap → docs → responsive, keyboard, and build verification.
