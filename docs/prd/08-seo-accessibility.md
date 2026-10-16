# PRD 08 — SEO & accessibility

## SEO requirements

**Must**
- Every page has a unique title, description, canonical URL, Open Graph and Twitter tags via `buildHead()`.
- Social preview image (`/og.jpg`) only on pages that use it, as an absolute URL.
- `sitemap.xml` and `robots.txt` generated at build from project data.
- Structured data: `Person` on home, `CreativeWork` on case studies.
- Not-found pages are `noindex`.

## Accessibility requirements

**Must**
- Semantic landmarks (`header`, `main`, `footer`), one `h1` per page, ordered headings.
- Skip-to-content link; visible focus states; full keyboard use including the mobile menu.
- Icon links have text labels; images have meaningful alt text from data.
- WCAG AA contrast.
- Respect `prefers-reduced-motion`.

## Acceptance criteria

- Lighthouse SEO and Accessibility 100 on `/` and one case study.
- Whole site usable with keyboard only.

## Current status

Implemented. Canonical URLs use `VITE_SITE_URL` (default `https://mweh.github.io`) — confirm the real GitHub username.
