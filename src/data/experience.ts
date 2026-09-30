import { ph } from "@/lib/placeholder";
import type { ExperienceEntry } from "@/types/experience";

/** Professional work first, then freelance, then the Academy. Dates are placeholders until provided. */
export const experience: ExperienceEntry[] = [
  {
    id: "professional",
    role: "iOS Developer",
    organization: ph("Employer name (BRI-related iOS development)"),
    period: ph("Employment dates"),
    summary: "Professional iOS development on production applications.",
    projectSlugs: ["brimo", "mytelkomsel"],
  },
  {
    id: "freelance",
    role: "International Freelance iOS Developer",
    organization: "Netherlands · United States",
    period: ph("Freelance period"),
    summary:
      "Independent, remote iOS work with international clients, across time zones and asynchronous collaboration.",
  },
  {
    id: "academy",
    role: "Apple Developer Academy",
    organization: "Apple Developer Academy @ ILB",
    period: "2026",
    summary:
      "Expanding product thinking, Apple ecosystem expertise, and prototyping through Apple Developer Academy.",
    projectSlugs: ["marble", "one-more-inch"],
  },
];
