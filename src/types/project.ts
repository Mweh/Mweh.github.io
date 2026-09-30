import type { Text } from "@/lib/placeholder";

export type ProjectCategory =
  | "Production"
  | "Independent"
  | "Apple Developer Academy";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectLink {
  label: string;
  href: Text;
}

/** The 10-part case-study structure. Each section is a list of paragraphs. */
export interface CaseStudy {
  context: Text[];
  problem: Text[];
  role: Text[];
  approach: Text[];
  engineering: Text[];
  productUx: Text[];
  challenges: Text[];
  outcome: Text[];
  reflection: Text[];
}

export interface Project {
  /** URL segment: /work/<slug> */
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Shown in "Selected Work" on the home page. */
  featured: boolean;
  /** Sort order, ascending. */
  order: number;
  /** Set false to hide a project everywhere without deleting it. */
  published: boolean;
  year: Text;
  role: Text;
  /** One line for cards. */
  description: string;
  /** Recruiter-readable intro at the top of the case study. */
  summary: string;
  /** Only technologies actually used. */
  technologies: string[];
  heroImage?: ProjectImage;
  gallery: ProjectImage[];
  links: ProjectLink[];
  caseStudy: CaseStudy;
  /** Short evidence note on cards, e.g. why no public repo exists. */
  evidence?: string;
  /** "compact" projects render smaller in Selected Work. Default: large. */
  weight?: "large" | "compact";
}
