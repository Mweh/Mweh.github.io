import { Link } from "@tanstack/react-router";
import { experience } from "@/data/experience";
import { getProject } from "@/data/projects";
import { Section, SectionHeading } from "@/components/common/Primitives";
import { TextValue } from "@/components/common/TextValue";
import { FreelanceBlock } from "./Freelance";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" className="border-t">
      <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've built." />
      <ol className="divide-y border-y">
        {experience.map((e) => (
          <li key={e.id} className="grid gap-3 py-8 sm:grid-cols-[12rem_1fr] sm:gap-10">
            <p className="font-mono text-sm text-muted-foreground">
              <TextValue value={e.period} />
            </p>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
              <p className="mt-0.5 text-muted-foreground">
                <TextValue value={e.organization} />
              </p>
              <p className="mt-3 max-w-2xl text-pretty">
                <TextValue value={e.summary} />
              </p>
              {e.projectSlugs && (
                <ul className="mt-4 flex flex-wrap gap-4 text-sm">
                  {e.projectSlugs.map((slug) => {
                    const p = getProject(slug);
                    return p ? (
                      <li key={slug}>
                        <Link
                          to="/work/$slug"
                          params={{ slug }}
                          className="text-accent underline-offset-4 hover:underline"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
      <FreelanceBlock />
    </Section>
  );
}
