import type { Text } from "@/lib/placeholder";

export interface Profile {
  name: string;
  title: string;
  experienceYears: string;
  headline: string;
  supportingStatement: string;
  heroStatement: string;
  technologyLine: string[];
  location: Text;
  academyLine: string;
  freelanceStatement: string;
  about: string[];
  portrait?: { src: string; alt: string };
  banner?: { src: string; alt: string; width: number; height: number };
  /** Path to the CV PDF in /public, or a placeholder until provided. */
  cvUrl: string;
  /** Absolute production URL, no trailing slash. Used for canonical URLs and sitemap. */
  siteUrl: string;
}

export interface SocialLink {
  id: "github" | "linkedin" | "upwork" | "email";
  label: string;
  href: Text;
  handle: Text;
}
