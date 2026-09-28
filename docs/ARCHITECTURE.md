# Architecture

## Routing (TanStack Router, file-based, `src/routes/`)

| File | URL | Purpose |
|---|---|---|
| `__root.tsx` | — | HTML shell, fonts, skip link, header, footer, `<Outlet />` |
| `index.tsx` | `/` | Home: Hero, Selected Work, Experience, Freelance, Skills, About, Contact |
| `work.index.tsx` | `/work` | All published projects grouped by category |
| `work.$slug.tsx` | `/work/:slug` | Case study for any project in `projects.ts`; unknown slug → not found (noindex) |
| `resume.tsx` | `/resume` | Printable resume + CV download |

`src/routeTree.gen.ts` is generated automatically.

## Deployment (static)

Every route is prerendered to static HTML at build time (`prerender.enabled` in `vite.config.ts`; page list = `projectSlugs` there, kept in sync with published projects in `src/data/projects.ts`). Output lands in `dist/client`: `work/koalafit/index.html` etc., so deep links work on any static host. `scripts/generate-sitemap.ts` (postbuild) writes `sitemap.xml` and `robots.txt` from the same data; `public/404.html` and `public/.nojekyll` are copied as-is. Deploy target: GitHub Pages user site via `.github/workflows/deploy.yml` (`npm ci && npm run build`, no secrets). The site origin comes from `VITE_SITE_URL`, defaulting to the value in `src/data/profile.ts`.

## Data model

- `types/project.ts` — `Project` with metadata, `technologies`, optional `heroImage`, `gallery`, `links`, and a `caseStudy` holding the 9 prose sections (Context → Reflection). Section 10 (Links) is rendered from `links`.
- `types/experience.ts` — `ExperienceEntry`, `FreelanceEntry`, `SkillGroup`.
- `types/profile.ts` — `Profile`, `SocialLink`.
- `lib/placeholder.ts` — `Text = string | Placeholder`; `ph()` creates a placeholder.

`published: false` hides a project everywhere; `featured` controls the home page; `order` sorts.

## Component hierarchy

```text
__root
  SiteHeader (Sheet for mobile menu)
  main > route page
    HomePage > Hero, SelectedWork(ProjectCard > MediaFrame), Experience, Freelance, Skills, About, Contact
    WorkPage > ProjectCard
    CaseStudy > CaseSection ×9, Links, Next project
    ResumePage
  SiteFooter
common/: Container, Section (reveal), SectionHeading, Eyebrow, Chip, TextValue, ExternalLink
```

## Styling

Tailwind v4, configured in `src/styles.css`. Semantic tokens (`background`, `foreground`, `surface`, `muted`, `accent`, `border`, `placeholder`) in oklch. Fonts: Geist and Geist Mono via Google Fonts `<link>` in `__root.tsx`. Reduced-motion and print rules live in the same file.

## Assets

- Project screenshots: put optimized images (WebP/AVIF, ~1600px wide) under `public/images/projects/<slug>/` and reference them in `heroImage`/`gallery` with width/height and alt text. Use absolute https URLs if you also want them as social previews.
- Portrait: `public/images/profile/`, set `profile.portrait`.
- CV: `public/cv/muhammad-fahmi-cv.pdf`, set `profile.cvUrl` to `/cv/muhammad-fahmi-cv.pdf`.
- Without an image, `MediaFrame` shows a labeled empty frame. Never generate fake screenshots.
