import { Link } from "@tanstack/react-router";
import { featuredProjects } from "@/data/projects";
import { Section, SectionHeading } from "@/components/common/Primitives";
import { ProjectCard } from "@/components/project/ProjectCard";

export function SelectedWork() {
  return (
    <Section id="work" labelledBy="work-title" className="border-t">
      <SectionHeading
        id="work-title"
        eyebrow="Selected Work"
        title="Production apps, shipped products, and Apple platform experiments."
      />
      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <Link
        to="/work"
        className="mt-14 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        All work →
      </Link>
    </Section>
  );
}
