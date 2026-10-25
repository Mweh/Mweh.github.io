import type { Text } from "@/lib/placeholder";

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: Text;
  period: Text;
  summary: Text;
  /** Optional project slugs to link to (must exist in projects.ts). */
  projectSlugs?: string[];
}

export interface FreelanceEntry {
  id: string;
  projectSlug?: string;
  country: string;
  client: Text;
  industry: Text;
  role: Text;
  problem: Text;
  built: Text;
  technologies: Text;
  contribution: Text;
  outcome: Text;
}

export interface SkillGroup {
  title: string;
  items: string[];
}
