# PRD 08 — SEO & accessibility

## SEO requirements

**Must**
- Every page has a unique title, description, canonical URL, Open Graph and Twitter tags via `buildHead()`.
- Home sharing image uses the supplied cover at `/images/profile/og-header.jpg`, as an absolute URL.
- `sitemap.xml` and `robots.txt` generated at build by scanning prerendered HTML.
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

Canonical URLs use `VITE_SITE_URL` (default `https://mweh.github.io`, owner confirmed). Global and project missing pages are noindex. Lighthouse scores still require measurement.
