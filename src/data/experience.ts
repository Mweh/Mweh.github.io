import type { ExperienceEntry } from "@/types/experience";

export const experienceContent = {
  eyebrow: "Experience & Education",
  title: "Where I've built and learned.",
  workTitle: "Experience",
  educationTitle: "Education",
};

/** Verified against the owner's November 2026 CV; preserve supplied dates. */
export const experience: ExperienceEntry[] = [
  {
    id: "revigurize",
    role: "iOS Developer · Freelance",
    organization: "Revigurize",
    location: "Netherlands",
    period: "Dec 2025 – Present",
    summary: "Led the migration of React.js-based product features to native iOS using Swift and UIKit, integrating existing full-stack services and delivering App Store-compliant releases.",
    projectSlugs: ["revigurize"],
  },
  {
    id: "qita",
    role: "iOS Developer · Contract",
    organization: "Qita by BRI",
    location: "Jakarta, Indonesia",
    period: "Jun 2025 – Apr 2026",
    summary: "Revamped BRImo’s legacy UI using UIKit and SnapKit, aligning with new design standards.",
    highlights: ["Optimized performance by cleaning legacy code, refactoring UI flow, and resolving inefficiencies in view rendering and logic handling."],
    projectSlugs: ["qita-by-bri"],
  },
  {
    id: "raisecall",
    role: "Fullstack Developer · Full-time",
    organization: "RaiseCall",
    location: "Jakarta, Indonesia",
    period: "Jan 2025 – May 2025",
    summary: "Implemented new features and resolved bugs using React and Node.js on a multi-tenant CRM platform.",
  },
  {
    id: "mytelkomsel",
    role: "iOS Developer · Full-time",
    organization: "MyTelkomsel",
    location: "Jakarta, Indonesia",
    period: "Sep 2023 – Feb 2025",
    summary: "Cut utility page load time from 7s to 0.5s using identifier-based caching and Instruments, improving tab-switch responsiveness across N, N+1, and M+1.",
    highlights: [
      "Collaborated with SUSE and FMC squads across Product Owner, Solution Architect, iOS, Android, Web API, and QA teams to deliver core feature sets.",
      "Delivered features and bug fixes using MVVM-C, RxSwift, UIKit, and SnapKit under Agile sprints using Jira and Confluence.",
    ],
    projectSlugs: ["mytelkomsel"],
  },
  {
    id: "myedusolve",
    role: "iOS Developer · Internship",
    organization: "Meat Solution @ MyEduSolve",
    location: "Jakarta, Indonesia",
    period: "Aug 2021 – Dec 2022",
    summary: "Completed a five-month MyEduSolve program focused on iOS development through real-world projects, best practices, and international certifications.",
    highlights: ["Developed Meat Solution, a SwiftUI-based e-commerce iOS app, as a capstone project for a client in the meat distribution industry."],
  },
  {
    id: "umi",
    role: "Computer Lab Assistant · Volunteer",
    organization: "Fakultas Ilmu Komputer · Universitas Muslim Indonesia",
    period: "Feb 2021 – Jul 2022",
    summary: "Assisted students with hardware and software issues and supported learning sessions on databases, programming languages, data structures, mobile, and full-stack development.",
  },
];

export const education: ExperienceEntry[] = [
  {
    id: "apple",
    role: "Apple Developer Academy",
    organization: "Apple Developer Academy Indonesia",
    location: "Indonesia",
    period: "Feb 2026 – Dec 2026 (Expected)",
    summary: "Built and shipped iOS applications, focusing on real-world product development, collaboration, and agile delivery.",
    projectSlugs: ["marble"],
  },
  {
    id: "umi-degree",
    role: "Bachelor of Computer Science",
    organization: "Universitas Muslim Indonesia",
    location: "Makassar, Indonesia",
    period: "Sep 2019 – Feb 2023",
    summary: "GPA: 3.98/4.00 · Magna Cumlaude.",
  },
  {
    id: "ui",
    role: "Undergraduate Micro Credentials · Computer Science",
    organization: "Universitas Indonesia",
    location: "Jakarta, Indonesia",
    period: "Sep 2021 – Nov 2021",
    summary: "Completed the Network Security Pen-Test Course under the KMMI Program in collaboration with the Cisco Networking Academy.",
  },
  {
    id: "darmstadt",
    role: "Studienkolleg",
    organization: "Technische Universität Darmstadt",
    location: "Darmstadt, Germany",
    period: "Jan 2015 – Aug 2016",
    summary: "Preparatory college in Germany for international students.",
  },
];
