import type { SkillGroup } from "@/types/experience";

export const skillGroups: SkillGroup[] = [
  { title: "iOS Development", items: ["Swift", "SwiftUI", "UIKit", "UIKit interoperability"] },
  {
    title: "Apple Frameworks",
    items: [
      "HealthKit",
      "Vision",
      "CoreLocation",
      "UserNotifications",
      "FamilyControls",
      "ManagedSettings",
      "DeviceActivity",
      "SpriteKit",
      "GameKit",
      "Core Haptics",
    ],
  },
  {
    title: "Architecture",
    items: ["MVVM", "Clean Architecture", "API integration", "Modularization", "Maintainable codebases"],
  },
  { title: "Delivery", items: ["Git", "App Store Connect", "TestFlight", "CI/CD"] },
];
