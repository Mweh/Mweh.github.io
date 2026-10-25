# PRD 02 — Content strategy

## Purpose

Define what the portfolio shows, in what order, and how it is written.

## Home page order

1. **Hero** — name, title, years, one-line claim, core technologies, primary actions (View work, Contact, CV).
2. **Selected Work** — large cards: Qita by BRI, MyTelkomsel, KoalaFit. Compact row: MindMories, Marble.
3. **Experience** — Professional → International freelance (Netherlands, United States) → Apple Developer Academy.
4. **Skills** — short grouped list; only skills that can be defended in an interview.
5. **About** — brief, factual, product-minded positioning.
6. **Contact** — email, LinkedIn, GitHub, Upwork, CV.

## Project cards

Must show: title, type label (e.g. "Professional / Production"), one-line description, key technologies, evidence note (e.g. "Production app — source not public"). Links appear only when real.

## Case study structure

Quick facts (Role, Year, Type, Contribution), then: Context, Problem, My Role, Approach, Engineering, Product & UX, Challenges, Outcome, Reflection, Links. Sections with only placeholders are hidden, except My Role.

The first lines must make sense to a recruiter; engineering depth goes lower.

## Writing rules

**Must**
- Be concrete and specific. Say what was built and what he owned.
- Use `ph("what is missing")` for any unknown fact.

**Won't**
- Invent clients, employers, dates, metrics, responsibilities, testimonials, or screenshots.
- Use clichés: "passionate developer", "turning ideas into reality", "building the future".
- List technologies not provided by the owner.

## Acceptance criteria

- Searching the repo for `ph(` lists every remaining gap.
- No copy lives inside components; all of it is in `src/data/`.

## Current status

Content model and order implemented. Many details are placeholders (see PRD 10).
