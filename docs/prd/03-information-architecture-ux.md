# PRD 03 — Information architecture & UX

## Purpose

Minimise unnecessary navigation and make important information immediately accessible.

## Pages

| URL | Content |
|---|---|
| `/` | One-page-first home (all core sections) |
| `/work` | All published projects grouped by category |
| `/work/:slug` | Case study (one shared template) |
| `/resume` | Printable resume and CV download |

Unknown slugs show a not-found page marked `noindex`.

## Navigation

Header: Work, Experience, About (in-page links), Resume (page), Contact (in-page). Mobile uses an accessible slide-in menu.

## Scan paths

- **10-second recruiter scan:** hero → years and title → first project card → contact.
- **Interviewer path:** project card → case study quick facts → Engineering section.
- **Freelance client path:** hero → freelance block in Experience → Upwork link.

## Requirements

**Must**
- Every case study links to the next project and back to work.
- No information hidden behind hover only.
- No horizontal scrolling at any width from 320px.

**Should**
- Case studies readable in under 3 minutes.

**Won't**
- Scroll-jacking, loading screens, intro animations that delay content.

## Acceptance criteria

- Home sections reachable from the header on mobile and desktop.
- Direct visit to any URL works (see PRD 09).

## Current status

Implemented.
