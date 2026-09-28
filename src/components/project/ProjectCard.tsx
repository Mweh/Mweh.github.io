import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { TextValue } from "@/components/common/TextValue";
import { MediaFrame } from "./MediaFrame";

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="group relative flex flex-col">
      <MediaFrame image={project.heroImage} label={project.title} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {project.category}
          </p>
          <Heading className="mt-1.5 text-xl font-semibold tracking-tight">
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
      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        <dt className="text-muted-foreground">Role</dt>
        <dd>
          <TextValue value={project.role} />
        </dd>
        <dt className="text-muted-foreground">Tech</dt>
        <dd className="text-foreground/80">{project.technologies.slice(0, 4).join(" · ")}</dd>
      </dl>
      {/* Focus ring for the whole card, since the link covers it. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-2xl ring-ring group-has-[a:focus-visible]:ring-2"
      />
    </article>
  );
}
