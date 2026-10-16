# PRD 06 — Performance

## Purpose

Load instantly on a mid-range phone on mobile data — recruiters often open links on phones.

## Targets

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | 95+ |
| Largest Contentful Paint | < 2.5 s |
| Cumulative Layout Shift | < 0.1 |
| Interaction to Next Paint | < 200 ms |
| Page weight (home, excluding images) | < 300 KB transferred |

## Requirements

**Must**
- Static HTML for every page (prerendered).
- Images: WebP/AVIF, about 1600px wide max, explicit width and height, `loading="lazy"` below the fold.
- Fonts: preconnect, `display=swap`, only the weights used.
- No imports of unused UI primitives or libraries.

**Should**
- Hero image (if any) is not lazy and is appropriately sized.

**Won't**
- Loading screens, video autoplay in hero, client-side data fetching for content.

## How to measure

`npm run build && npx serve dist/client`, then run Lighthouse in Chrome DevTools (mobile preset) on `/` and one case study.

## Current status

Static output in place. Lighthouse scores not yet recorded — add them here after the first deploy.
