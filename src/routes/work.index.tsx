import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/pages/WorkPage";
import { profile } from "@/data/profile";
import { buildHead } from "@/lib/seo";
import { siteContent } from "@/data/site";

export const Route = createFileRoute("/work/")({
  head: () =>
    buildHead({
      title: `Work — ${profile.name}, ${profile.title}`,
      description: siteContent.workDescription,
      path: "/work",
    }),
  component: WorkPage,
});
