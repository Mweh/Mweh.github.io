# Add your photo and header banner to the portfolio

## What you'll see
- **Your photo** (black-and-white, sitting by the Marble screen) in the About section, where "Portrait to be added" shows today. It's cropped to a portrait shape with your face and the Marble screen in view.
- **Your photo on the Resume page**: a small round version next to your name.
- **Your header banner** ("iOS Engineer · From Cold Start to Smooth Finish") as a wide image across the top of the About section, with rounded corners. It's dark and has its own text, so it works best as one clear statement, not as a background behind other text.
- **Link previews**: when someone shares your site on LinkedIn or WhatsApp, the preview shows your header banner instead of the plain text card.

## Things to know
- The banner shows small Postman, TypeScript, Drizzle, Postgres and Docker logos. The site doesn't list those skills. If you'd rather not show them, I can crop that corner off.
- Both images are made smaller and faster to load. The originals aren't changed.

## Technical details
- Images are stored in the repo under `public/images/profile/` (`portrait.webp` + `.jpg` fallback, `header.webp`, `og-header.jpg` at 1200x630), not the Lovable CDN, so GitHub Pages can serve them.
- `src/data/profile.ts`: set `portrait` and add `banner: { src, alt, width, height }`; add `banner?` to `src/types/profile.ts`.
- `About.tsx` renders the banner and portrait from data; `ResumePage.tsx` shows a small round portrait (hidden in print if needed).
- `routes/index.tsx`: og:image / twitter:image become `${siteUrl}/images/profile/og-header.jpg`.
- Update the "Portrait photo" item in `docs/prd/10-roadmap-open-items.md` to done.
