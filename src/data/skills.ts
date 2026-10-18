import type { SkillGroup } from "@/types/experience";

export const skillGroups: SkillGroup[] = [
  { title: "iOS Development", items: ["Swift", "SwiftUI", "UIKit"] },
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
    ],
  },
  {
    title: "Architecture",
    items: ["MVVM", "Clean Architecture", "API integration", "Maintainable codebases"],
  },
  { title: "Delivery", items: ["Git", "App Store Connect", "TestFlight"] },
];
