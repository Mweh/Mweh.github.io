import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { TextValue } from "@/components/common/TextValue";
import { isPlaceholder } from "@/lib/placeholder";
import { cn } from "@/lib/utils";
import { MediaFrame } from "./MediaFrame";

export function ProjectCard({
  project,
  headingLevel = 3,
  compact = false,
}: {
  project: Project;
  headingLevel?: 2 | 3;
  compact?: boolean;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const realLinks = project.links.filter((l) => !isPlaceholder(l.href));
  return (
    <article className="group relative flex flex-col">
      {(!compact || project.heroImage) && <MediaFrame image={project.heroImage} label={project.title} caption={project.technologies.slice(0, 3).join(" · ")} />}
      <div className={cn("flex items-start justify-between gap-4", (!compact || project.heroImage) && "mt-5")}>
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {project.type ?? project.category}
          </p>
          <Heading className={cn("mt-1.5 font-semibold tracking-tight", compact ? "text-lg" : "text-xl")}>
            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {project.title}
            </Link>
          </Heading>
        </div>
        <ArrowUpRight
          aria-hidden
          className="mt-5 size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
      <p className="mt-2 text-pretty text-muted-foreground">{project.description}</p>
      <dl className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1 text-sm">
        {!isPlaceholder(project.role) && (
          <>
            <dt className="text-muted-foreground">Role</dt>
            <dd>
              <TextValue value={project.role} />
            </dd>
          </>
        )}
        <dt className="text-muted-foreground">Tech</dt>
        <dd className="text-foreground/80">{project.technologies.slice(0, 5).join(" · ")}</dd>
      </dl>
      <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <span className="font-medium text-accent">View case study</span>
        {realLinks.map((l) => (
          <a
            key={l.label}
            href={l.href as string}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-foreground/80 underline-offset-4 hover:underline"
          >
            {l.label} ↗
          </a>
        ))}
        {project.evidence && <span className="text-muted-foreground">{project.evidence}</span>}
      </p>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-2xl ring-ring group-has-[a:focus-visible]:ring-2"
      />
    </article>
  );
}
