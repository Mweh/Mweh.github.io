import { ph } from "@/lib/placeholder";
import type { Profile } from "@/types/profile";

/** Single source of truth for personal information. */
export const profile: Profile = {
  name: "Muhammad Fahmi",
  title: "iOS Developer",
  experienceYears: "3+",
  headline: "Native iOS apps for banking, telco and the App Store.",
  supportingStatement:
    "3+ years building and shipping native iOS applications with Swift, SwiftUI, UIKit, and the Apple ecosystem.",
  heroStatement: "3+ years building and shipping native iOS applications.",
  technologyLine: ["Swift", "SwiftUI", "UIKit", "Apple Platforms"],
  location: ph("Location, e.g. city, Indonesia"),
  academyLine:
    "Expanding product thinking, Apple ecosystem expertise, and prototyping through Apple Developer Academy.",
  freelanceStatement:
    "I can take an iOS project from an existing codebase or from an idea toward a shippable product.",
  about: [
    "I'm an iOS Developer specializing in native Apple development — Swift, SwiftUI, and UIKit — with experience taking applications from implementation through shipping on the App Store.",
    "My professional work includes iOS development on production applications such as BRImo and MyTelkomsel, and I'm comfortable working inside existing codebases as well as starting from an idea.",
    "Alongside that, I work independently with international clients from the Netherlands and the United States, remotely and across time zones.",
    "I'm currently part of Apple Developer Academy 2026 @ ILB, expanding product thinking, Apple ecosystem expertise, and prototyping.",
  ],
  portrait: { src: "/images/profile/portrait.webp", alt: "Muhammad Fahmi sitting at a desk next to a screen showing the Marble app" },
  banner: {
    src: "/images/profile/header.webp",
    alt: "iOS Engineer — Modular, reusable, testable, performant. From Cold Start to Smooth Finish.",
    width: 1400,
    height: 350,
  },
  cvUrl: "/cv/muhammad-fahmi-cv.pdf",
  // Production origin (no trailing slash). Override at build time with
  // VITE_SITE_URL; defaults to the GitHub Pages user site.
  siteUrl:
    (import.meta.env["VITE_SITE_URL"] as string | undefined) ??
    "https://mweh.github.io",
};
