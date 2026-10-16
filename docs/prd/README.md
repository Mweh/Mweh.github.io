# Product Requirement Documents

These PRDs describe what the portfolio is for, what it must show, and the standards the code must keep. Read them before changing the site.

| # | Document | Scope |
|---|---|---|
| 01 | [Product overview](01-product-overview.md) | Purpose, readers, goals, non-goals |
| 02 | [Content strategy](02-content-strategy.md) | What to show, in what order, how to write it |
| 03 | [Information architecture & UX](03-information-architecture-ux.md) | Pages, navigation, scan paths |
| 04 | [Design system](04-design-system.md) | Type, colour, spacing, motion |
| 05 | [Tech stack](05-tech-stack.md) | Chosen tools and dependency policy |
| 06 | [Performance](06-performance.md) | Budgets, images, fonts, measurement |
| 07 | [Code quality](07-code-quality.md) | Keep-it-simple rules and review checklist |
| 08 | [SEO & accessibility](08-seo-accessibility.md) | Metadata, sitemap, a11y |
| 09 | [Deployment & operations](09-deployment-operations.md) | GitHub Pages, CI, release checklist |
| 10 | [Roadmap & open items](10-roadmap-open-items.md) | Missing content, future work |

## Layout of each PRD

Purpose → Requirements (Must / Should / Won't) → Acceptance criteria → Current status → Open questions.

## Precedence

If documents disagree: **01 > 02 > 03 > the rest**. `AGENTS.md` rules override any PRD on code matters. Never fabricate facts; unknowns stay as `ph()` placeholders and are listed in PRD 10.

## Updating

Change the PRD in the same commit as the code that changes the behaviour. Keep each document short.
