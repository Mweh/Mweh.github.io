import { Link } from "@tanstack/react-router";
import { featuredProjects } from "@/data/projects";
import { siteContent } from "@/data/site";
import { Section, SectionHeading } from "@/components/common/Primitives";
import { ProjectCard } from "@/components/project/ProjectCard";

export function SelectedWork() {
  const large = featuredProjects.filter((p) => p.weight !== "compact");
  const compact = featuredProjects.filter((p) => p.weight === "compact");
  return (
    <Section id="work" labelledBy="work-title" className="border-t pt-10 sm:pt-12">
      <SectionHeading
        id="work-title"
        eyebrow="Selected Work"
        title={siteContent.selectedWorkTitle}
      />
      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {large.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {compact.length > 0 && (
        <div className="mt-16 grid gap-x-10 gap-y-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {compact.map((p) => (
            <ProjectCard key={p.slug} project={p} compact />
          ))}
        </div>
      )}
      <Link
        to="/work"
        className="mt-14 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        All work →
      </Link>
    </Section>
  );
}
