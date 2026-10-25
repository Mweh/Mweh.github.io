import type { ProjectImage } from "@/types/project";

// Images live in public/images/projects/<slug>/ and are served as plain static files.

export const projectMedia: Record<string, { heroImage: ProjectImage; gallery: ProjectImage[] }> = {
  revigurize: {
    heroImage: { src: "/images/projects/revigurize/cover.webp", alt: "Revigurize — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [1, 2, 3].map((n) => ({ src: `/images/projects/revigurize/screenshot-${n}.webp`, alt: `Revigurize — App Store screenshot ${n}`, width: 600, height: 1299 })),
  },
  "love-in-the-sky": {
    heroImage: { src: "/images/projects/love-in-the-sky/cover.webp", alt: "Love In The Sky — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [1, 2, 3].map((n) => ({ src: `/images/projects/love-in-the-sky/screenshot-${n}.webp`, alt: `Love In The Sky — App Store screenshot ${n}`, width: 600, height: 1299 })),
  },
  marble: {
    heroImage: { src: "/images/projects/marble/cover.webp", alt: "Marble app — home, screen-time impact, and report screens", width: 1026, height: 696 },
    gallery: [
      { src: "/images/projects/marble/screen-1.webp", alt: "Marble home screen showing today's screen time", width: 339, height: 696 },
      { src: "/images/projects/marble/screen-2.webp", alt: "Marble screen showing the long-term impact of screen time", width: 337, height: 696 },
      { src: "/images/projects/marble/screen-3.webp", alt: "Marble report showing screen-time totals and alternative activities", width: 336, height: 696 },
    ],
  },
  "qita-by-bri": {
    heroImage: { src: "/images/projects/qita-by-bri/cover.webp", alt: "Qita by BRI — official App Store screenshots", width: 1600, height: 948 },
    gallery: [
      { src: "/images/projects/qita-by-bri/screenshot-1.webp", alt: "Qita by BRI — App Store screenshot 1", width: 600, height: 1067 },
      { src: "/images/projects/qita-by-bri/screenshot-2.webp", alt: "Qita by BRI — App Store screenshot 2", width: 600, height: 1067 },
      { src: "/images/projects/qita-by-bri/screenshot-3.webp", alt: "Qita by BRI — App Store screenshot 3", width: 600, height: 1067 },
    ],
  },
  "mytelkomsel": {
    heroImage: { src: "/images/projects/mytelkomsel/cover.webp", alt: "MyTelkomsel — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [
      { src: "/images/projects/mytelkomsel/screenshot-1.webp", alt: "MyTelkomsel — App Store screenshot 1", width: 600, height: 1299 },
      { src: "/images/projects/mytelkomsel/screenshot-2.webp", alt: "MyTelkomsel — App Store screenshot 2", width: 600, height: 1299 },
      { src: "/images/projects/mytelkomsel/screenshot-3.webp", alt: "MyTelkomsel — App Store screenshot 3", width: 600, height: 1299 },
    ],
  },
  "koalafit": {
    heroImage: { src: "/images/projects/koalafit/cover.webp", alt: "KoalaFit — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [
      { src: "/images/projects/koalafit/screenshot-1.webp", alt: "KoalaFit — App Store screenshot 1", width: 600, height: 1299 },
      { src: "/images/projects/koalafit/screenshot-2.webp", alt: "KoalaFit — App Store screenshot 2", width: 600, height: 1299 },
      { src: "/images/projects/koalafit/screenshot-3.webp", alt: "KoalaFit — App Store screenshot 3", width: 600, height: 1299 },
    ],
  },
  "mindmories": {
    heroImage: { src: "/images/projects/mindmories/cover.webp", alt: "MindMories — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [
      { src: "/images/projects/mindmories/screenshot-1.webp", alt: "MindMories — App Store screenshot 1", width: 600, height: 1299 },
      { src: "/images/projects/mindmories/screenshot-2.webp", alt: "MindMories — App Store screenshot 2", width: 600, height: 1299 },
      { src: "/images/projects/mindmories/screenshot-3.webp", alt: "MindMories — App Store screenshot 3", width: 600, height: 1299 },
    ],
  },
};
