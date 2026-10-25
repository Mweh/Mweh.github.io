import type { ProjectImage } from "@/types/project";
import marbleCover from "@/assets/project-media/marble/cover.webp.asset.json";
import marbleHome from "@/assets/project-media/marble/screen-1.webp.asset.json";
import marbleImpact from "@/assets/project-media/marble/screen-2.webp.asset.json";
import marbleReport from "@/assets/project-media/marble/screen-3.webp.asset.json";
import qitabybri0 from "@/assets/project-media/qita-by-bri/cover.webp.asset.json";
import qitabybri1 from "@/assets/project-media/qita-by-bri/screenshot-1.webp.asset.json";
import qitabybri2 from "@/assets/project-media/qita-by-bri/screenshot-2.webp.asset.json";
import qitabybri3 from "@/assets/project-media/qita-by-bri/screenshot-3.webp.asset.json";
import mytelkomsel0 from "@/assets/project-media/mytelkomsel/cover.webp.asset.json";
import mytelkomsel1 from "@/assets/project-media/mytelkomsel/screenshot-1.webp.asset.json";
import mytelkomsel2 from "@/assets/project-media/mytelkomsel/screenshot-2.webp.asset.json";
import mytelkomsel3 from "@/assets/project-media/mytelkomsel/screenshot-3.webp.asset.json";
import koalafit0 from "@/assets/project-media/koalafit/cover.webp.asset.json";
import koalafit1 from "@/assets/project-media/koalafit/screenshot-1.webp.asset.json";
import koalafit2 from "@/assets/project-media/koalafit/screenshot-2.webp.asset.json";
import koalafit3 from "@/assets/project-media/koalafit/screenshot-3.webp.asset.json";
import mindmories0 from "@/assets/project-media/mindmories/cover.webp.asset.json";
import mindmories1 from "@/assets/project-media/mindmories/screenshot-1.webp.asset.json";
import mindmories2 from "@/assets/project-media/mindmories/screenshot-2.webp.asset.json";
import mindmories3 from "@/assets/project-media/mindmories/screenshot-3.webp.asset.json";

// Preview uses managed assets; static production uses the same optimized local files.
const source = (asset: { url: string }, path: string) => import.meta.env.DEV ? asset.url : path;

export const projectMedia: Record<string, { heroImage: ProjectImage; gallery: ProjectImage[] }> = {
  marble: {
    heroImage: { src: source(marbleCover, "/images/projects/marble/cover.webp"), alt: "Marble app — home, screen-time impact, and report screens", width: 1026, height: 696 },
    gallery: [
      { src: source(marbleHome, "/images/projects/marble/screen-1.webp"), alt: "Marble home screen showing today's screen time", width: 339, height: 696 },
      { src: source(marbleImpact, "/images/projects/marble/screen-2.webp"), alt: "Marble screen showing the long-term impact of screen time", width: 337, height: 696 },
      { src: source(marbleReport, "/images/projects/marble/screen-3.webp"), alt: "Marble report showing screen-time totals and alternative activities", width: 336, height: 696 },
    ],
  },
  "qita-by-bri": {
    heroImage: { src: source(qitabybri0, "/images/projects/qita-by-bri/cover.webp"), alt: "Qita by BRI — official App Store screenshots", width: 1600, height: 948 },
    gallery: [
      { src: source(qitabybri1, "/images/projects/qita-by-bri/screenshot-1.webp"), alt: "Qita by BRI — App Store screenshot 1", width: 600, height: 1067 },
      { src: source(qitabybri2, "/images/projects/qita-by-bri/screenshot-2.webp"), alt: "Qita by BRI — App Store screenshot 2", width: 600, height: 1067 },
      { src: source(qitabybri3, "/images/projects/qita-by-bri/screenshot-3.webp"), alt: "Qita by BRI — App Store screenshot 3", width: 600, height: 1067 },
    ],
  },
  "mytelkomsel": {
    heroImage: { src: source(mytelkomsel0, "/images/projects/mytelkomsel/cover.webp"), alt: "MyTelkomsel — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [
      { src: source(mytelkomsel1, "/images/projects/mytelkomsel/screenshot-1.webp"), alt: "MyTelkomsel — App Store screenshot 1", width: 600, height: 1299 },
      { src: source(mytelkomsel2, "/images/projects/mytelkomsel/screenshot-2.webp"), alt: "MyTelkomsel — App Store screenshot 2", width: 600, height: 1299 },
      { src: source(mytelkomsel3, "/images/projects/mytelkomsel/screenshot-3.webp"), alt: "MyTelkomsel — App Store screenshot 3", width: 600, height: 1299 },
    ],
  },
  "koalafit": {
    heroImage: { src: source(koalafit0, "/images/projects/koalafit/cover.webp"), alt: "KoalaFit — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [
      { src: source(koalafit1, "/images/projects/koalafit/screenshot-1.webp"), alt: "KoalaFit — App Store screenshot 1", width: 600, height: 1299 },
      { src: source(koalafit2, "/images/projects/koalafit/screenshot-2.webp"), alt: "KoalaFit — App Store screenshot 2", width: 600, height: 1299 },
      { src: source(koalafit3, "/images/projects/koalafit/screenshot-3.webp"), alt: "KoalaFit — App Store screenshot 3", width: 600, height: 1299 },
    ],
  },
  "mindmories": {
    heroImage: { src: source(mindmories0, "/images/projects/mindmories/cover.webp"), alt: "MindMories — official App Store screenshots", width: 1600, height: 1155 },
    gallery: [
      { src: source(mindmories1, "/images/projects/mindmories/screenshot-1.webp"), alt: "MindMories — App Store screenshot 1", width: 600, height: 1299 },
      { src: source(mindmories2, "/images/projects/mindmories/screenshot-2.webp"), alt: "MindMories — App Store screenshot 2", width: 600, height: 1299 },
      { src: source(mindmories3, "/images/projects/mindmories/screenshot-3.webp"), alt: "MindMories — App Store screenshot 3", width: 600, height: 1299 },
    ],
  },
};
