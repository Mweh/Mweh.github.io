import { ph } from "@/lib/placeholder";
import type { Project } from "@/types/project";
import { projectMedia } from "./projectMedia";

/**
 * All projects. Add a project by appending one object — the card, case-study page,
 * work index, sitemap and metadata are generated from it.
 * Never invent details: use ph("...") for anything not yet provided.
 */
const projects: Project[] = [
  {
    slug: "qita-by-bri",
    type: "Professional / Production",
    evidence: "Production app — source not public",
    title: "Qita by BRI",
    category: "Production",
    featured: true,
    order: 1,
    published: true,
    year: ph("Years active"),
    role: "iOS Developer",
    description: "Native iOS development on a production-scale financial application.",
    summary:
      "Professional iOS development on Qita by BRI, a production financial application.",
    technologies: ["Swift", "iOS"],
    heroImage: projectMedia["qita-by-bri"]?.heroImage,
    gallery: projectMedia["qita-by-bri"]?.gallery ?? [],
    links: [{ label: "App Store", href: "https://apps.apple.com/id/app/qita-by-bri/id6747552980" }],
    caseStudy: {
      context: ["Qita by BRI is a production financial application on iOS."],
      problem: [ph("Problem or goal of the work you contributed to")],
      role: [ph("Responsibilities on the Qita by BRI iOS team")],
      approach: [ph("How you approached the work")],
      engineering: [ph("Architecture, frameworks and technical decisions you can share")],
      productUx: [ph("Product and UX decisions you were involved in")],
      challenges: [ph("What was difficult")],
      outcome: [ph("What was shipped or achieved")],
      reflection: [ph("What you would improve")],
    },
  },
  {
    slug: "mytelkomsel",
    type: "Professional / Production",
    evidence: "Production app — source not public",
    title: "MyTelkomsel",
    category: "Production",
    featured: true,
    order: 2,
    published: true,
    year: ph("Years active"),
    role: "iOS Developer",
    description: "Native iOS development on a production telecommunications application.",
    summary: "Professional native iOS development on the MyTelkomsel production application.",
    technologies: ["Swift", "iOS"],
    heroImage: projectMedia["mytelkomsel"]?.heroImage,
    gallery: projectMedia["mytelkomsel"]?.gallery ?? [],
    links: [{ label: "App Store", href: "https://apps.apple.com/id/app/mytelkomsel/id651412430" }],
    caseStudy: {
      context: ["MyTelkomsel is a production application on iOS."],
      problem: [ph("Problem or goal of the work you contributed to")],
      role: [ph("Responsibilities on MyTelkomsel")],
      approach: [ph("How you approached the work")],
      engineering: [ph("Architecture, frameworks and technical decisions you can share")],
      productUx: [ph("Product and UX decisions you were involved in")],
      challenges: [ph("What was difficult")],
      outcome: [ph("What was shipped or achieved")],
      reflection: [ph("What you would improve")],
    },
  },
  {
    slug: "koalafit",
    type: "Independent / Shipped",
    title: "KoalaFit",
    category: "Independent",
    featured: true,
    order: 3,
    published: true,
    year: ph("Release year"),
    role: ph("Role, e.g. iOS Developer"),
    description: "A shipped App Store app combining HealthKit, Apple Watch and AI-assisted onboarding.",
    summary:
      "KoalaFit is a shipped App Store project built with SwiftUI and MVVM, integrating HealthKit, Apple Watch, AI-powered onboarding with Gemini, and food scanning.",
    technologies: ["SwiftUI", "MVVM", "HealthKit", "Apple Watch", "Gemini", "Food scanning"],
    heroImage: projectMedia["koalafit"]?.heroImage,
    gallery: projectMedia["koalafit"]?.gallery ?? [],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/koalafit/id6774622691" },
      { label: "GitHub", href: ph("Repository URL, if public") },
    ],
    caseStudy: {
      context: [
        "KoalaFit is a shipped iOS app on the App Store, built natively with SwiftUI.",
        ph("One-sentence description of what KoalaFit does for its users"),
      ],
      problem: [ph("The product problem KoalaFit solves, and for whom")],
      role: [ph("Your exact contribution — solo or team, and which parts you owned")],
      approach: [ph("How you approached the product and the build")],
      engineering: [
        "The app follows an MVVM architecture in SwiftUI.",
        "Apple ecosystem integration spans HealthKit and an Apple Watch experience.",
        "Onboarding uses AI via Gemini, and the app includes food scanning.",
        ph("Key technical decisions: data flow, HealthKit permissions, Watch sync, AI integration"),
      ],
      productUx: [ph("Important product and UX decisions, e.g. onboarding design")],
      challenges: [ph("What was difficult — HealthKit, Watch, AI or scanning")],
      outcome: ["Shipped to the App Store.", ph("Anything else achieved or learned")],
      reflection: [ph("What you would improve")],
    },
  },
  {
    slug: "mindmories",
    type: "Independent / Product Experiment",
    weight: "compact",
    title: "MindMories",
    category: "Independent",
    featured: true,
    order: 4,
    published: true,
    year: ph("Year"),
    role: ph("Role"),
    description: "A SwiftUI app built on PhotoKit, Vision, CoreLocation and UserNotifications.",
    summary:
      "MindMories is an independent iOS project in SwiftUI and MVVM, integrating native Apple frameworks: PhotoKit, Vision, CoreLocation and UserNotifications.",
    technologies: ["SwiftUI", "MVVM", "PhotoKit", "Vision", "CoreLocation", "UserNotifications"],
    heroImage: projectMedia["mindmories"]?.heroImage,
    gallery: projectMedia["mindmories"]?.gallery ?? [],
    links: [
      { label: "App Store", href: "https://apps.apple.com/id/app/mindmories/id6786116342" },
      { label: "GitHub", href: ph("Repository URL, if public") },
    ],
    caseStudy: {
      context: [ph("What MindMories is and who it is for")],
      problem: [ph("The problem it solves")],
      role: [ph("Your exact contribution")],
      approach: [ph("How you approached it")],
      engineering: [
        "Built in SwiftUI with an MVVM architecture.",
        "Integrates PhotoKit, Vision, CoreLocation and UserNotifications.",
        ph("How these frameworks work together and key technical decisions"),
      ],
      productUx: [ph("Product experience decisions")],
      challenges: [ph("Technical challenges")],
      outcome: [ph("What was shipped or learned")],
      reflection: [ph("What you would improve")],
    },
  },
  {
    slug: "marble",
    type: "Apple Developer Academy",
    weight: "compact",
    title: "Marble",
    category: "Apple Developer Academy",
    featured: true,
    order: 5,
    published: true,
    year: ph("Year"),
    role: ph("Role on the team"),
    description: "Designing friction against excessive social-media scrolling with Apple's Screen Time APIs.",
    summary:
      "Marble helps people reduce excessive social-media scrolling and instant gratification, working within Apple's Screen Time APIs and their system-level constraints.",
    technologies: [
      "SwiftUI",
      "UIKit",
      "FamilyControls",
      "ManagedSettings",
      "DeviceActivity",
      "UserNotifications",
      "Charts",
    ],
    gallery: [],
    links: [{ label: "Link", href: ph("App Store / GitHub / demo URL") }],
    caseStudy: {
      context: [
        "Marble is a product experiment focused on helping users reduce excessive social-media scrolling and instant gratification.",
      ],
      problem: [ph("What you learned about user behavior and the problem")],
      role: [ph("Your contribution")],
      approach: [ph("How you approached designing friction")],
      engineering: [
        "Built on Apple's Screen Time APIs — FamilyControls, ManagedSettings and DeviceActivity — with SwiftUI, UIKit, UserNotifications and Charts.",
        ph("Technical decisions within the system-level constraints of these APIs"),
      ],
      productUx: [ph("How friction was designed within Apple's ecosystem")],
      challenges: [ph("Technical limitations and the product decisions they forced")],
      outcome: [ph("Outcome")],
      reflection: [ph("What you would improve")],
    },
  },
  {
    slug: "arterious",
    title: "Arterious",
    category: "Apple Developer Academy",
    featured: false,
    order: 7,
    // Hidden until confirmed appropriate for the portfolio.
    published: false,
    year: ph("Year"),
    role: ph("Role"),
    description: "Apple Developer Academy project — details to be added.",
    summary: "Apple Developer Academy project — details to be added.",
    technologies: [],
    gallery: [],
    links: [],
    caseStudy: {
      context: [ph("Context")],
      problem: [ph("Problem")],
      role: [ph("Role")],
      approach: [ph("Approach")],
      engineering: [ph("Engineering")],
      productUx: [ph("Product / UX")],
      challenges: [ph("Challenges")],
      outcome: [ph("Outcome")],
      reflection: [ph("Reflection")],
    },
  },
];

export const publishedProjects = projects
  .filter((p) => p.published)
  .sort((a, b) => a.order - b.order);

export const featuredProjects = publishedProjects.filter((p) => p.featured);

export const getProject = (slug: string) => publishedProjects.find((p) => p.slug === slug);

export const projectCategories = ["Production", "Independent", "Apple Developer Academy"] as const;
