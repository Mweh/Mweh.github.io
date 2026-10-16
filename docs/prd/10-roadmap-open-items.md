# PRD 10 — Roadmap & open items

## Missing content (owner to supply)

| Priority | Item | Where it goes |
|---|---|---|
| High | Confirm 3+ or 5+ years | `src/data/profile.ts` |
| High | Email, LinkedIn, GitHub, Upwork URLs | `src/data/socialLinks.ts` |
| High | CV PDF | `public/cv/`, `profile.cvUrl` |
| High | Real GitHub username (for site URL) | `src/data/profile.ts` default |
| High | BRImo and MyTelkomsel role, responsibilities, dates | `src/data/projects.ts`, `experience.ts` |
| Medium | Employment dates for all entries | `src/data/experience.ts` |
| Medium | Netherlands and United States freelance details (or neutral descriptions if confidential) | `src/data/freelance.ts` |
| Medium | App Store / GitHub links for KoalaFit, MindMories | `src/data/projects.ts` |
| Medium | Real app screenshots | `public/images/projects/<slug>/` |
| Low | Portrait photo | `public/images/profile/` |
| Low | Whether Arterious should be public | `published` flag |

## Future work (optional)

- Record Lighthouse scores after first deploy (PRD 06).
- Add short demo videos to case studies once real recordings exist.
- Indonesian-language version only if recruiters request it.

## Won't do

- Blog, CMS, contact form, backend, analytics requiring cookies banners.
