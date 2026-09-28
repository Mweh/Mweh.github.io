import { ph } from "@/lib/placeholder";
import type { FreelanceEntry } from "@/types/experience";

const entry = (id: string, country: string): FreelanceEntry => ({
  id,
  country,
  client: ph(`${country} Client / Project`),
  industry: ph("Client industry"),
  role: ph("My role"),
  problem: ph("Problem the client had"),
  built: ph("What I built"),
  technologies: ph("Technologies used"),
  contribution: ph("My contribution"),
  outcome: ph("Outcome"),
});

export const freelance: FreelanceEntry[] = [
  entry("netherlands", "Netherlands"),
  entry("united-states", "United States"),
];

export const freelanceStrengths = [
  "Independent execution",
  "Remote and asynchronous",
  "Across time zones",
  "Existing codebases",
  "API integration",
  "App Store delivery",
];
