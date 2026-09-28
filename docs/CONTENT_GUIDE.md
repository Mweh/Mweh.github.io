# Content guide

## Principles

- Only write what is true. If a detail is unknown, use `ph("what is missing")`.
- Concrete, professional language. Avoid "passionate developer", "turning ideas into reality", "building the future".
- The first lines of a case study must make sense to a recruiter; deeper engineering detail goes in Engineering / Challenges.

## Replace a placeholder

Search the repo for `ph(`. Replace `ph("LinkedIn URL")` with the real string, e.g. `"https://www.linkedin.com/in/..."`.

## Add a project

In `src/data/projects.ts`, append:

```ts
{
  slug: "my-app",              // → /work/my-app
  title: "My App",
  category: "Independent",     // "Production" | "Independent" | "Apple Developer Academy"
  featured: true,              // show on home page
  order: 8,
  published: true,
  year: "2026",
  role: "iOS Developer",
  description: "One line for the card.",
  summary: "Two sentences a recruiter understands in 10 seconds.",
  technologies: ["SwiftUI", "MVVM"],
  heroImage: { src: "/images/projects/my-app/hero.webp", alt: "…", width: 1600, height: 1200 },
  gallery: [],
  links: [{ label: "App Store", href: "https://apps.apple.com/…" }],
  caseStudy: {
    context: ["…"], problem: ["…"], role: ["…"], approach: ["…"],
    engineering: ["…"], productUx: ["…"], challenges: ["…"],
    outcome: ["…"], reflection: ["…"],
  },
}
```

Each case-study field is a list of paragraphs. Nothing else needs editing.

## Experience

Edit `src/data/experience.ts` (newest first). `projectSlugs` links entries to case studies.

## Freelance

Edit `src/data/freelance.ts`. Replace each `ph()` field with real details, or with a neutral description if the client name is confidential (e.g. "Health-tech startup, Netherlands").

## Skills

Edit `src/data/skills.ts`. Keep groups short; only list skills you can discuss in an interview.
