# PRD 04 — Design system

## Purpose

A premium, editorial, typography-led look that supports reading, not decoration.

## Foundations

- **Type:** Geist (text) and Geist Mono (labels, metadata), loaded via `<link>` in `__root.tsx` with `display=swap`.
- **Colour:** warm paper background, ink foreground, one cobalt accent. All values are oklch tokens in `src/styles.css`.
- **Spacing:** generous whitespace; consistent section rhythm.
- **Components:** Container, Section, SectionHeading, Eyebrow, Chip, TextValue, ExternalLink, ProjectCard, MediaFrame.

## Requirements

**Must**
- Use semantic tokens only (`bg-background`, `text-foreground`, `text-accent`…). No hex values or raw colour utilities in components.
- Text contrast meets WCAG AA.
- Motion: small fades and hover lifts only, all disabled under `prefers-reduced-motion`.

**Won't**
- 3D/WebGL, blobs, custom cursors, heavy glass or gradients, scroll-jacking, animation libraries.

## Acceptance criteria

- Changing a token in `src/styles.css` restyles the whole site.
- Reduced-motion mode shows no animation.

## Current status

Implemented.
