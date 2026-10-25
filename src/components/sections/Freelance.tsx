import { freelance, freelanceStrengths } from "@/data/freelance";
import { profile } from "@/data/profile";
import { siteContent } from "@/data/site";
import { Chip } from "@/components/common/Primitives";
import { TextValue } from "@/components/common/TextValue";
import { isPlaceholder } from "@/lib/placeholder";
import type { FreelanceEntry } from "@/types/experience";
import { Link } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { MediaFrame } from "@/components/project/MediaFrame";

const fields: Array<[keyof FreelanceEntry, string]> = [
  ["industry", "Client / Industry"],
  ["role", "My Role"],
  ["problem", "Problem"],
  ["built", "What I Built"],
  ["technologies", "Technologies"],
  ["contribution", "My Contribution"],
  ["outcome", "Outcome"],
];

/** International freelance block, rendered inside the Experience section. */
export function FreelanceBlock() {
  return (
    <div id="freelance" className="mt-16 scroll-mt-24">
      <h3 className="text-2xl font-semibold tracking-tight">{siteContent.freelanceTitle}</h3>
      <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{profile.freelanceStatement}</p>
      <ul aria-label="Ways of working" className="mt-6 mb-10 flex flex-wrap gap-2">
        {freelanceStrengths.map((s) => (
          <li key={s}>
            <Chip>{s}</Chip>
          </li>
        ))}
      </ul>
      <div className="grid gap-6 md:grid-cols-2">
        {freelance.map((f) => {
          const project = f.projectSlug ? getProject(f.projectSlug) : undefined;
          return (
          <article key={f.id} className="rounded-lg border bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {f.country}
            </p>
            <h4 className="mt-2 text-xl font-semibold tracking-tight">
              <TextValue value={f.client} />
            </h4>
            {project && <>
              <Link to="/work/$slug" params={{ slug: project.slug }} aria-label={`${project.title} case study`} className="mt-5 block focus-visible:outline-2 focus-visible:outline-ring">
                <MediaFrame image={project.heroImage} label={project.title} />
              </Link>
              <p className="mt-5 text-sm text-pretty text-muted-foreground">{project.description}</p>
              <Link to="/work/$slug" params={{ slug: project.slug }} className="mt-4 inline-flex text-sm font-medium text-accent hover:underline">View project →</Link>
            </>}
            <dl className="mt-6 space-y-3 text-sm">
              {fields.filter(([key]) => !isPlaceholder(f[key])).map(([key, label]) => (
                <div key={key} className="grid gap-1 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd>
                    <TextValue value={f[key]} />
                  </dd>
                </div>
              ))}
            </dl>
          </article>
          );
        })}
      </div>
    </div>
  );
}
