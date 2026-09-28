import { ph } from "@/lib/placeholder";
import type { SocialLink } from "@/types/profile";

/** Update URLs here only — every component reads from this list. */
export const socialLinks: SocialLink[] = [
  { id: "email", label: "Email", href: ph("mailto: address"), handle: ph("Email address") },
  { id: "linkedin", label: "LinkedIn", href: ph("LinkedIn URL"), handle: ph("LinkedIn handle") },
  { id: "github", label: "GitHub", href: ph("GitHub URL"), handle: ph("GitHub username") },
  { id: "upwork", label: "Upwork", href: ph("Upwork profile URL"), handle: ph("Upwork profile") },
];
