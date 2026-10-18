# Portfolio audit — what to fix, adjust and improve

The site builds and every page loads. Most of what's left is **missing content**: about 90 gaps are still marked as placeholders. Below, everything is grouped by priority. The "I'll do it" items need no input from you. The "You supply" items wait on your answers.

## 1. Content (biggest impact on recruiters)

**You supply**
- BRImo and MyTelkomsel: your role, responsibilities, dates and what you shipped. Right now these case studies are almost empty, and they're your strongest evidence.
- Employer name and employment dates. The Experience section shows "Employer name" and "Employment dates" as placeholders.
- Freelance work in the Netherlands and the US: the industry, what you built and the outcome. A general description is fine if the work is confidential.
- Links for KoalaFit and MindMories (App Store, GitHub), plus links for Marble and One More Inch.
- Real screenshots for each app. Right now every card shows an empty phone frame.
- Your location (for example "Jakarta, Indonesia"). It matters for local hiring.
- Whether Arterious should be shown.
- **Faster option:** let me fill in dates, employer and responsibilities from the CV you uploaded. I would only copy facts that are written in the CV.

**I'll do it**
- Remove any skill you didn't list yourself. "GameKit", "Core Haptics", "CI/CD", "Modularization" and "UIKit interoperability" need your confirmation, or I take them out.
- When a project has no real details yet, show one short honest line ("Details available on request") instead of many dashed placeholder labels.
- Make the hero headline more specific. Today it reads "iOS Developer building native Apple experiences." The new version would use only facts you've already given, such as banking and telco production apps and App Store shipping.

## 2. Design

- Cards without screenshots look unfinished. Until real screenshots arrive, replace the empty phone frames with a clean title-and-technology tile.
- On a phone screen, check the hero text size, the menu and the spacing between cards, and tighten anything that's off. Your current preview is about 600px wide.
- Visible focus outlines and color contrast: check them on every page and fix any failures.

## 3. Code and quality

- One source for "Download CV": the top section and the Resume page currently check for the CV in two different ways.
- Remove dead code: the leftover placeholder fallback for the CV button, unused components and unused ui primitives.
- Add a few small tests for the important rules: only published projects appear, every published project has a page, and placeholder links are never shown.
- Keep the list of project pages generated at build time in sync with the project data automatically. Today it's a manual list in the build config.

## 4. SEO and sharing

- Give each case study its own description, and add structured data (Person on the home page, CreativeWork on case studies).
- Check that the sitemap and robots.txt use https://mweh.github.io.
- Add the Apple touch icon and theme color.

## 5. Docs

- Update PRD 10 (open items) and the PRD status lines after these changes.

## Technical details
- Files: `src/data/*` (content), `src/data/skills.ts`, `components/project/MediaFrame.tsx`, `ProjectCard.tsx`, `CaseStudy.tsx` (hide placeholder-only cards and sections), `Hero.tsx` + `ResumePage.tsx` (shared `cvReady`), `lib/seo.ts` + routes (JSON-LD), `vite.config.ts` (read slugs from data via a plain JS module or a script), vitest tests in `src/data/__tests__/`.
- No new dependencies, still a static build, no backend.

## Order
1. Code, SEO and design fixes (no input needed).
2. Content from your answers or the CV.
3. Docs update. Then a build check and a check of every page at phone and desktop size.
