import { Link } from "@tanstack/react-router";
import { experience, education, experienceContent } from "@/data/experience";
import type { ExperienceEntry } from "@/types/experience";
import { getProject } from "@/data/projects";
import { Section, SectionHeading } from "@/components/common/Primitives";
import { TextValue } from "@/components/common/TextValue";
import { FreelanceBlock } from "./Freelance";

function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
      <ol className="divide-y border-y">
        {entries.map((e) => (
          <li key={e.id} className="grid gap-4 py-8 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
            <p className="font-mono text-sm leading-relaxed text-muted-foreground"><TextValue value={e.period} /></p>
            <div className="min-w-0">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                {e.image ? <img src={e.image.src} alt={e.image.alt} width={48} height={48} loading="lazy" decoding="async" className="size-12 shrink-0 rounded-[22.5%] border bg-surface object-cover" /> : <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-[22.5%] border bg-surface font-mono text-sm text-muted-foreground">{typeof e.organization === "string" ? e.organization.slice(0, 2).toUpperCase() : ""}</span>}
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <p className="mt-0.5 text-muted-foreground"><TextValue value={e.organization} /></p>
                  {e.location && <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>}
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-pretty"><TextValue value={e.summary} /></p>
              {e.highlights && <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-pretty text-foreground/85">{e.highlights.map((text) => <li key={text}>{text}</li>)}</ul>}
              {e.projectSlugs && <ul className="mt-4 flex flex-wrap gap-4 text-sm">{e.projectSlugs.map((slug) => {
                const project = getProject(slug);
                return project ? <li key={slug}><Link to="/work/$slug" params={{ slug }} className="text-accent underline-offset-4 hover:underline">{project.title} ↗</Link></li> : null;
              })}</ul>}
            </div>
          </li>
        ))}
      </ol>
  );
}

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" className="border-t">
      <SectionHeading id="experience-title" eyebrow={experienceContent.eyebrow} title={experienceContent.title} />
      <h3 className="mb-6 text-xl font-semibold">{experienceContent.workTitle}</h3>
      <Timeline entries={experience} />
      <h3 className="mt-14 mb-6 text-xl font-semibold">{experienceContent.educationTitle}</h3>
      <Timeline entries={education} />
      <FreelanceBlock />
    </Section>
  );
}
