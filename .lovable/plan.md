# Portfolio Architecture and Implementation Plan — Muhammad Fahmi, iOS Developer

Both uploaded files are identical; the specification is treated as the source of truth. Nothing is implemented until this plan is approved.

## 1. Current project audit

| Area | Finding |
|---|---|
| Framework | TanStack Start v1 (React 19, SSR), Vite 8, TypeScript 5.8 |
| Routing | File-based TanStack Router in `src/routes/`. Only `__root.tsx` and a placeholder `index.tsx` exist. `routeTree.gen.ts` is generated automatically |
| Styling | Tailwind v4, CSS-first. Tokens in `src/styles.css` (shadcn slate defaults, oklch). No `tailwind.config.js` |
| UI kit | ~45 shadcn/Radix primitives in `src/components/ui/` (unused so far) |
| Data layer | TanStack Query set up in `router.tsx`; not needed for static content |
| Assets | Only `public/favicon.ico` and `public/robots.txt`. No images, fonts, CV, or screenshots |
| Docs | `README.md` is template text; `AGENTS.md` holds only a Lovable git-sync notice; no `docs/` |
| Backend | None, and none required |
| Metadata | Root head uses placeholder "Lovable App" text — must be replaced |

### Reuse safely
- TanStack Start setup, `vite.config.ts`, `router.tsx`, `server.ts`, `start.ts`, error reporting files (leave untouched).
- `src/lib/utils.ts` (`cn`), and the few shadcn primitives actually needed: `button`, `badge`, `separator`, `sheet` (mobile nav). Unused primitives stay in place but are not imported, so they add nothing to the bundle.
- `lucide-react` for the small set of icons.

### Change
- Replace the placeholder `index.tsx` and root metadata.
- Replace default slate tokens in `src/styles.css` with the portfolio design system.
- Rewrite `README.md`; extend `AGENTS.md` (keeping the existing Lovable notice block intact); add `docs/`.
- Update `robots.txt`; add sitemap.

### Deviation from the spec's suggested structure (and why)
The spec suggests `src/pages/`. This stack uses file-based routing in `src/routes/`, and a parallel `pages/` folder would confuse the router conventions for any future agent. Instead: route files stay thin (metadata + one page component), and the page composition lives in `src/components/pages/`. Same separation, conventional for this framework.

## 1b. Dependency audit

**Packages to add: none.**

| Need | Solution | Why no package |
|---|---|---|
| Animation / reveals | CSS transitions + ~20-line `IntersectionObserver` hook | Framer Motion / GSAP add 30-60 KB for fades and hover lifts |
| Smooth scroll | CSS `scroll-behavior: smooth` (off under reduced motion) | Lenis is scroll-jacking the spec forbids |
| State | React `useState` for the mobile menu only | Content is static data; Redux/Zustand unnecessary |
| Data fetching | Direct imports from `src/data/*.ts` | No remote data; TanStack Query not used by any page |
| Content / CMS | Typed TS files | Spec forbids a CMS |
| Contact form | None — email/LinkedIn/Upwork links | Spec says form optional; avoids a backend and form library |
| SEO / head | Built-in route `head()` | No react-helmet needed |
| Sitemap | Server route generating XML from data | Trivial string template |
| 3D / smooth effects | None | Excluded by spec |

**Already installed and kept (used):** React, TanStack Start/Router (the framework; stands in for React Router), Tailwind v4, `clsx` + `tailwind-merge` (`cn`), `class-variance-authority` (button variants), `lucide-react` (a few icons, tree-shaken), `@radix-ui/react-dialog` via `sheet` (accessible mobile menu: focus trap, Escape, aria — worth it over hand-rolling).

**Already installed but unused by the portfolio:** TanStack Query (wired into the template router; left in place, zero page usage), `react-hook-form`, `zod`, `recharts`, `embla-carousel-react`, `date-fns`, `react-day-picker`, `cmdk`, `vaul`, `input-otp`, `sonner`, `react-resizable-panels`, and most Radix primitives. They ship no code to visitors because nothing imports them. Optional cleanup step (recommended, at the end): remove the unused shadcn primitive files and their packages so the repo only contains what the site uses — clearer for future agents. Framework-level packages are not touched.

## 2. Folder structure

```text
src/
  routes/                     thin route files: head() + render page
    __root.tsx                shell, fonts, header/footer, skip link
    index.tsx                 /
    work.index.tsx            /work
    work.$slug.tsx            /work/:slug  (all case studies, one file)
    resume.tsx                /resume
    sitemap[.]xml.ts          /sitemap.xml generated from data
  components/
    ui/                       existing shadcn primitives (reused)
    layout/                   SiteHeader, MobileNav, SiteFooter, Container, SkipLink
    sections/                 Hero, SelectedWork, Experience, Freelance, Skills, About, Contact
    project/                  ProjectCard, ProjectMeta, CaseStudyLayout, CaseStudySection,
                              MediaFrame (image or labeled placeholder), ProjectLinks
    common/                   SectionHeading, Chip, Placeholder, Reveal
    pages/                    HomePage, WorkPage, ProjectDetailPage, ResumePage
  data/
    profile.ts                name, title, years, statements, location, CV path
    socialLinks.ts            GitHub, LinkedIn, Upwork, Email
    projects.ts               every project + case-study content
    experience.ts             timeline entries
    freelance.ts              Netherlands / United States entries
    skills.ts                 grouped skills
  types/
    project.ts  experience.ts  profile.ts
  lib/
    utils.ts                  existing
    seo.ts                    buildMeta(), canonical URL, JSON-LD helpers
    placeholder.ts            isPlaceholder() helper + marker convention
  hooks/
    use-reveal.ts             reduced-motion-aware reveal
  assets/
    projects/  profile/       (empty until real screenshots/portrait are provided)
public/
  cv/                         CV PDF slot
  robots.txt
docs/
  ARCHITECTURE.md  CONTENT_GUIDE.md
README.md  AGENTS.md
```

## 3. Content and data model

All personal and project content lives only in `src/data/`. Components never contain copy.

```ts
// types/project.ts
type ProjectCategory = "Production" | "Independent" | "Apple Developer Academy" | "Freelance";

interface Project {
  slug: string;              // URL: /work/<slug>
  title: string;
  category: ProjectCategory;
  featured: boolean;         // shown in Selected Work
  order: number;
  year: string | Placeholder;
  role: string | Placeholder;
  description: string;       // one line, card
  summary: string;           // recruiter-readable intro
  technologies: string[];    // only technologies from the spec
  heroImage?: ProjectImage;  // omitted -> labeled placeholder frame
  gallery: ProjectImage[];
  links: { label: string; href: string | Placeholder }[];
  caseStudy: {
    context; problem; role; approach; engineering; productUx;
    challenges; outcome; reflection   // each: string[] paragraphs or Placeholder
  };
  published: boolean;        // hide without deleting
}
```

A `Placeholder` is a typed marker, e.g. `ph("BRImo responsibilities")`. It renders as a visibly dashed "To be added: …" label so gaps are obvious on the page, and a single search for `ph(` lists everything left to fill. Adding a project = adding one object to `projects.ts`; the card, case-study page, sitemap and metadata are generated from it.

## 4. Routes and pages

- `/` Home: Hero, Selected Work (featured projects), Experience, International Freelance, Skills, About, Contact. Home sections scroll within one page because the spec defines them as homepage sections; case studies and resume are separate URLs.
- `/work` all published projects, grouped by category.
- `/work/$slug` shared case-study layout with the 10 numbered sections; unknown slug shows a not-found page with `noindex`. A sticky section index on desktop, collapsed on mobile. Previous/next project links.
- `/resume` concise printable summary (print stylesheet) with CV download.
- Header: name, Work, Resume, Contact; mobile uses a sheet menu.

## 5. Content — what is real vs placeholder

Real (from spec): name, title, 5+ years, headline and supporting statement, technology line, positioning copy, academy line, project names, categories and listed technologies, KoalaFit as shipped on the App Store, freelance countries, skill groups, contact headline, freelance value statement.

Editable placeholders (nothing invented):
- Social links: GitHub, LinkedIn, Upwork, email address
- CV PDF file
- Portrait photo
- Location line (spec implies Indonesia; exact wording to confirm)
- All employment dates and durations; BRI/BRImo employer wording and dates
- BRImo and MyTelkomsel: role, responsibilities, features, engineering details, outcomes, links
- KoalaFit and MindMories: year, App Store / GitHub links, challenge and outcome details beyond listed technologies
- Marble and One More Inch: year, team role, outcome, links
- Arterious: included as an unpublished draft entry (`published: false`) until confirmed
- Freelance: `[Netherlands Client / Project]`, `[United States Client / Project]` with Industry, Role, Problem, What I Built, Technologies, Contribution, Outcome
- All screenshots, demo videos, social preview image (no generated or fake screenshots)
- Production domain for canonical URLs and sitemap (single constant in `profile.ts`)

Case-study prose will be written only as framing drawn from the spec's stated focus areas (for example "KoalaFit integrates HealthKit and Apple Watch"), never as invented results or metrics.

## 6. Design system

Direction: premium, editorial, typography-led, restrained palette, one accent, generous whitespace. Before building, three rendered visual directions will be shown for you to choose from; the chosen one becomes the tokens in `src/styles.css` (colors in oklch, font families, type scale, spacing, radii, shadows). Light theme by default; dark mode tokens defined if the chosen direction includes it. Fonts self-hosted via Google Fonts `<link>` with `display=swap` and preconnect.

Explicitly excluded: 3D/WebGL, blobs, custom cursor, scroll-jacking, heavy glass or gradients, loading screens.

## 7. Motion, responsiveness, accessibility, performance

- Motion: hero fade-in, card hover lift, section reveal on case studies; all disabled under `prefers-reduced-motion`; never delays navigation.
- Responsive: designed per breakpoint (iPhone, iPad, laptop, large desktop); mobile gets single-column cards, simplified nav, no hover-only info, no horizontal overflow.
- Accessibility: semantic landmarks, one `h1` per page, ordered headings, skip link, visible focus rings, labeled icon links, alt text from data, AA contrast checked on tokens.
- Performance: SSR HTML, no animation library, lazy-loaded images with explicit dimensions and `srcset`, minimal client JS, only needed primitives imported.

## 8. SEO

- `lib/seo.ts` builds title, description, canonical, Open Graph and Twitter tags per route from data.
- Root head: charset, viewport, site-wide defaults only (no og:image on root).
- Case studies: title/description from the project; og:image only when a real absolute image exists.
- JSON-LD: `Person` on home, `CreativeWork` on case studies.
- `/sitemap.xml` generated from `projects.ts`; `robots.txt` references it.

## 9. Documentation for future agents

- `README.md`: purpose, `bun install` / `bun run dev` / `bun run build`, deployment, where content lives, how to add a project.
- `AGENTS.md`: keep Lovable notice block; add architecture rules, coding and styling conventions, component boundaries, "do not" list (no hardcoded copy, no edits to `routeTree.gen.ts`, no new deps for trivial tasks, no fabricated content).
- `docs/ARCHITECTURE.md`: routing, data model, component hierarchy, styling tokens, asset strategy.
- `docs/CONTENT_GUIDE.md`: writing descriptions and case studies, adding experience, skills, freelance entries, replacing placeholders, adding screenshots.

## 10. Implementation order (after approval)

1. Show three design directions; you pick one.
2. Tokens, fonts, base styles.
3. Types, `data/` files with real content and placeholders, `seo.ts`.
4. Root layout: header, mobile nav, footer, skip link, metadata.
5. Shared primitives: Container, SectionHeading, Chip, Placeholder, MediaFrame, Reveal.
6. Home sections.
7. KoalaFit case study as the reference implementation of `/work/$slug`.
8. Work index, Resume, Contact.
9. Remaining case studies (data only).
10. Sitemap, robots, JSON-LD.
11. Docs.
12. Verification: build, all routes, keyboard pass, reduced motion, mobile/tablet/desktop screenshots, overflow and console checks.

## Open items that would help (can be supplied anytime)
Real links, email, CV PDF, portrait, screenshots, dates, BRImo/MyTelkomsel details, freelance details, whether Arterious should be public, and the final domain.
