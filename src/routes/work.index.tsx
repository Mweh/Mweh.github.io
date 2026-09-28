import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/pages/WorkPage";
import { profile } from "@/data/profile";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/work/")({
  head: () =>
    buildHead({
      title: `Work — ${profile.name}, ${profile.title}`,
      description:
        "Selected iOS work: production apps, independent App Store projects, and Apple Developer Academy experiments.",
      path: "/work",
    }),
  component: WorkPage,
});
