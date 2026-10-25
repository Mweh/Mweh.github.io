# PRD 10 — Roadmap & open items

## Missing content (owner to supply)

| Priority | Item | Where it goes |
|---|---|---|
| Done | 3+ years confirmed | `src/data/profile.ts` |
| Done | Email, LinkedIn, GitHub, Upwork URLs supplied | `src/data/socialLinks.ts` |
| Done | CV PDF supplied | `public/cv/`, `profile.cvUrl` |
| Done | GitHub username Mweh and site URL confirmed | `src/data/profile.ts` default |
| High | Qita by BRI and MyTelkomsel role, responsibilities, dates | `src/data/projects.ts`, `experience.ts` |
| Medium | Employment dates for all entries | `src/data/experience.ts` |
| Medium | Location | `src/data/profile.ts` |
| Medium | Netherlands and United States freelance details (or neutral descriptions if confidential) | `src/data/freelance.ts` |
| Done / Medium | App Store links supplied for KoalaFit, MindMories, Qita by BRI, MyTelkomsel; public GitHub project links still needed | `src/data/projects.ts` |
| Medium | Real app screenshots | `public/images/projects/<slug>/` |
| Done | Portrait photo and header banner | `public/images/profile/` |
| Low | Whether Arterious should be public | `published` flag |

## Future work (optional)

- Record Lighthouse scores after first deploy (PRD 06).
- Add short demo videos to case studies once real recordings exist.
- Indonesian-language version only if recruiters request it.

## Won't do

- Blog, CMS, contact form, backend, analytics requiring cookies banners.

## Audit 2026-10-18 (done)

- Published site shows "Available on request" for missing facts; dashed "To be added" labels appear only in development.
- Unconfirmed skills removed (GameKit, Core Haptics, CI/CD, Modularization, UIKit interoperability) — re-add only if confirmed.
- Screenshot frames replaced by title tiles until real screenshots exist.
- Unused UI primitives deleted; tests in `src/data/projects.test.ts` (`bun test src/data`).
- Still open: Apple touch icon (needs a real icon image), all owner-supplied content above.

## Focused design and KISS audit 2026-10-25

- Small portrait introduced in the opening; larger About portrait precedes biography on phones. Cover reserved for sharing.
- Shorter opening and compact screenshot-free project tiles; no empty case-study media panel.
- Résumé profile links actionable; shared positioning copy centralized.
- Unused Query provider, UI scaffolding and dependencies removed; unused-code checks enabled.
- Project-data tests now gate GitHub Pages deployment.
