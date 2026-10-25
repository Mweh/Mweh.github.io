# Portfolio audit and focused improvement plan

## Verdict: photo and cover placement

**Keep the detailed About section near the bottom, but introduce your face near the top.** Those are different jobs: the first establishes identity; the second provides background.

Currently, About starts roughly **4,063px down the desktop page**. On a phone, your portrait comes after the banner and all four About paragraphs, so it appears even later. The photograph is strong: it shows you and real Marble work, not a generic headshot.

**Recommended arrangement:**
- Add a small, clearly visible portrait beside your name/title in the opening section. Keep the professional headline and work buttons dominant; do not turn the opening into a large photo panel.
- Keep the larger photograph in About, but show it before the biography on phones; retain the side-by-side arrangement on desktop.
- Remove the cover from the visible About section. Keep it for social sharing. Its embedded typography, multiple Swift icons and dark code background compete with the site's quieter editorial style. At 390px wide it shrinks to about 349 × 87px, making the smaller text difficult to read.
- Do **not** move both images into the footer: that would make identity even harder to discover.

## Design findings

### Highest priority
1. **Evidence is weaker than presentation.** BRImo's detail page has introductory context but no supplied responsibilities or engineering decisions. Moving photos will not solve that trust gap. Add only facts you supply; do not invent achievements, dates or screenshots.
2. **Empty media takes too much space.** BRImo has a large 16:9 title tile in its case study, repeating the title while pushing the actual content down. Omit the large frame when no real image exists; use a compact title treatment for screenshot-free project cards.
3. **The opening is too tall on smaller screens.** At 696 × 818, the first section ends around 794px, leaving no useful glimpse of Selected Work. At 320px wide, its height is 838px. Reduce top/bottom spacing and slightly reduce the narrow-screen headline size without reducing legibility.

### Useful refinements
4. **Repeated claims slow scanning.** The opening, supporting statement and About repeatedly describe native iOS development and shipping. Keep the top concise; reserve About for distinctive working style and background, using only verified facts.
5. **Unify the visual language.** Preserve the paper/ink/cobalt tokens, Geist typography, clear borders and restrained motion. Standardize radii across photos, media and repeated items; avoid adding gradients, glass effects or more decorative layers.
6. **Make résumé profile links actionable.** The résumé currently renders social handles as plain text. Use real links on screen, retaining readable contact information when printed. Its small portrait crop also makes your face difficult to inspect; choose an intentional face-focused crop for this small version.
7. **Missing content remains missing in production.** Development shows dashed labels; production substitutes “Available on request.” This is less distracting but is not evidence. Avoid repeating that phrase in multiple quick-fact fields, and prioritize filling responsibilities, dates and location.

## Code review: KISS

**The foundation is already good:** typed content, one case-study template, named small components, thin main routes, semantic color tokens, CSS-only motion and static GitHub Pages deployment. No framework rewrite, backend or animation dependency is needed.

### Fix actual quality gaps
- Move remaining positioning copy out of About, Contact, Freelance and Work components into typed data; the current “all content in data” contract is not consistently followed.
- Give the global client-side not-found view equivalent `noindex` handling to the static 404; project-specific missing pages already have it.
- Run the existing published-slug tests in GitHub Actions before deployment. They currently pass, but do not gate deployment.
- Correct stale docs: README placeholder behavior, sitemap discovery description, and roadmap items already completed (social links and CV).

### Simplify only where unused
- Remove unused React Query setup after confirming there are no consumers. Keep the router and shared shell; do not replace the framework.
- Remove unreferenced UI scaffolding, the unused mobile hook and unrelated installed dependencies. An installed package is not automatically shipped to visitors, so no bundle-size saving is claimed without measurement.
- Enable unused-code checks after cleanup to prevent the same accumulation.
- Reduce duplicated static-page/origin configuration where straightforward; preserve the published-slug parity test rather than introducing a generic configuration engine.

## Proposed implementation order

1. **Photo and layout:** small top portrait; mobile About ordering; cover reserved for sharing; shorter opening; compact no-image project treatment.
2. **Consistency and usability:** unify existing radii; actionable résumé links; sensible portrait crop.
3. **KISS cleanup:** centralized copy, unused infrastructure removal, corrected docs and deployment test gate.
4. **Validate:** desktop and 320/390/696px layouts, menu and section navigation, keyboard focus, reduced motion, CV download, metadata, publication tests and static deep links.

Keep all personal/project wording unchanged unless it is supplied or explicitly approved. Content gaps are not to be replaced by fabricated facts.

## What was checked

- Inspected desktop home, About and BRImo, plus narrow layouts at 320, 390 and 696px and the mobile résumé.
- No horizontal overflow at the tested widths; header links fit at 640, 650 and 696px.
- Mobile menu opens, About navigation closes it and reaches `/#about`.
- Both About images load after scrolling; CV returns **200, application/pdf**.
- No browser page errors were captured during the checked flows.
- Existing four project-data tests passed in the code review.
- Inspected metadata declarations on all four content routes.

**Not yet verified:** full keyboard/contrast audit, Lighthouse/Core Web Vitals, a fresh production build, or the current deployed GitHub Pages site. These are not claimed as passing. No website code has been changed by this audit.
