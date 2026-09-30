import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { buildHead, jsonLd } from "@/lib/seo";
import { isPlaceholder } from "@/lib/placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildHead({
      title: `${profile.name} — ${profile.title}`,
      description: profile.supportingStatement,
      path: "/",
      type: "profile",
      image: `${profile.siteUrl}/og.jpg`,
    }),
    scripts: [
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.title,
        url: profile.siteUrl,
        knowsAbout: ["Swift", "SwiftUI", "UIKit", "iOS", "Apple Platforms"],
        sameAs: socialLinks
          .map((l) => l.href)
          .filter((h): h is string => !isPlaceholder(h) && h.startsWith("http")),
      }),
    ],
  }),
  component: HomePage,
});
