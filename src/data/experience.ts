import { ph } from "@/lib/placeholder";
import type { ExperienceEntry } from "@/types/experience";

/** Timeline, newest first. Dates are placeholders until provided. */
export const experience: ExperienceEntry[] = [
  {
    id: "academy",
    role: "Apple Developer Academy",
    organization: "Apple Developer Academy @ ILB",
    period: "2026",
    summary:
      "Expanding product thinking, Apple ecosystem expertise, and prototyping through Apple Developer Academy.",
    projectSlugs: ["marble", "one-more-inch"],
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
    id: "professional",
    role: "iOS Developer",
    organization: ph("Employer name (BRI-related iOS development)"),
    period: ph("Employment dates"),
    summary: "Professional iOS development on production applications.",
    projectSlugs: ["brimo", "mytelkomsel"],
  },
];
