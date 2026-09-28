import { createFileRoute } from "@tanstack/react-router";
import { ResumePage } from "@/components/pages/ResumePage";
import { profile } from "@/data/profile";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/resume")({
  head: () =>
    buildHead({
      title: `Resume — ${profile.name}, ${profile.title}`,
      description: `Resume of ${profile.name}: ${profile.supportingStatement}`,
      path: "/resume",
    }),
  component: ResumePage,
});
