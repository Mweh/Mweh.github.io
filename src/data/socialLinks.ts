import type { SocialLink } from "@/types/profile";

/** Update URLs here only — every component reads from this list. */
export const socialLinks: SocialLink[] = [
  { id: "email", label: "Email", href: "mailto:fahmianton@gmail.com", handle: "fahmianton@gmail.com" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/fahmianton/", handle: "in/fahmianton" },
  { id: "github", label: "GitHub", href: "https://github.com/Mweh", handle: "Mweh" },
  { id: "upwork", label: "Upwork", href: "https://www.upwork.com/freelancers/~011228f334dc56e92f", handle: "Upwork profile" },
];
