import { Link } from "@tanstack/react-router";
import type { Project, CaseStudy as CaseStudyData } from "@/types/project";
import { publishedProjects } from "@/data/projects";
import { Chip, Container, Eyebrow } from "@/components/common/Primitives";
import { TextValue } from "@/components/common/TextValue";
import { ExternalLink } from "@/components/common/ExternalLink";
import { isPlaceholder } from "@/lib/placeholder";
import { useReveal } from "@/hooks/use-reveal";
import { MediaFrame } from "./MediaFrame";

/** Order and titles of the numbered case-study sections. */
const sections: Array<{ key: keyof CaseStudyData; title: string; question: string }> = [
  { key: "context", title: "Context", question: "What was the product?" },
  { key: "problem", title: "Problem", question: "What problem was being solved?" },
  { key: "role", title: "My Role", question: "What exactly did I contribute?" },
  { key: "approach", title: "Approach", question: "How did I approach it?" },
  { key: "engineering", title: "Engineering", question: "Architecture, frameworks, decisions." },
  { key: "productUx", title: "Product / UX", question: "Important product and UX decisions." },
  { key: "challenges", title: "Challenges", question: "What was difficult?" },
  { key: "outcome", title: "Outcome", question: "What was shipped, learned, achieved?" },
  { key: "reflection", title: "Reflection", question: "What would I improve?" },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

function CaseSection({ index, title, question, paragraphs }: {
  index: number;
  title: string;
  question: string;
  paragraphs: CaseStudyData[keyof CaseStudyData];
}) {
  const ref = useReveal<HTMLElement>();
  const id = `s-${num(index)}`;
  return (
    <section ref={ref} id={id} aria-labelledby={`${id}-t`} className="scroll-mt-24 border-t py-12">
      <div className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
        <div>
          <p className="font-mono text-sm text-accent">{num(index)}</p>
          <h2 id={`${id}-t`} className="mt-1 text-xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{question}</p>
        </div>
        <div className="max-w-2xl space-y-4 text-lg text-pretty text-foreground/85">
          {paragraphs.map((p, i) => (
            <p key={i}>
              <TextValue value={p} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const idx = publishedProjects.findIndex((p) => p.slug === project.slug);
  const next = publishedProjects[(idx + 1) % publishedProjects.length];
  // Show a section only when it has real content; "My Role" always shows so a gap stays visible.
  const visible = sections.filter(
    (s) => s.key === "role" || project.caseStudy[s.key].some((p) => !isPlaceholder(p)),
  );
  const realLinks = project.links.filter((l) => !isPlaceholder(l.href));

  return (
    <article>
      <Container className="pt-12 sm:pt-20">
        <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground">
          ← All work
        </Link>
        <header className="animate-enter mt-8 max-w-3xl">
          <Eyebrow>{project.category}</Eyebrow>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.035em] sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 text-xl text-pretty text-muted-foreground">{project.summary}</p>
        </header>

        <dl className="mt-12 grid gap-6 border-y py-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="mt-1 font-medium"><TextValue value={project.role} /></dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Year</dt>
            <dd className="mt-1 font-medium"><TextValue value={project.year} /></dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Type</dt>
            <dd className="mt-1 font-medium">{project.type ?? project.category}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Contribution</dt>
            <dd className="mt-1 font-medium">
              <TextValue value={project.caseStudy.role[0] ?? project.role} />
            </dd>
          </div>
        </dl>

        <ul aria-label="Technologies" className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li key={t}><Chip>{t}</Chip></li>
          ))}
        </ul>

        <MediaFrame
          image={project.heroImage}
          label={project.title}
          caption={project.technologies.join(" · ")}
          priority
          className="mt-12 aspect-[16/9]"
        />

        <div className="mt-16">
          {visible.map((s, i) => (
            <CaseSection
              key={s.key}
              index={i}
              title={s.title}
              question={s.question}
              paragraphs={project.caseStudy[s.key]}
            />
          ))}
          {realLinks.length > 0 && (
          <section aria-labelledby="s-links-t" className="border-t py-12">
            <div className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
              <div>
                <p className="font-mono text-sm text-accent">{num(visible.length)}</p>
                <h2 id="s-links-t" className="mt-1 text-xl font-semibold tracking-tight">Links</h2>
              </div>
              <ul className="space-y-3 text-lg">
                {realLinks.map((l) => (
                  <li key={l.label} className="flex flex-wrap items-center gap-3">
                    <span className="text-muted-foreground">{l.label}</span>
                    <ExternalLink href={l.href} className="text-accent underline-offset-4 hover:underline">
                      Open ↗
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          )}
          {project.evidence && (
            <p className="border-t py-8 text-sm text-muted-foreground">{project.evidence}</p>
          )}
        </div>
      </Container>

      {next && next.slug !== project.slug && (
        <Container className="pb-24">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group block rounded-2xl border bg-surface p-8 transition-colors hover:bg-secondary sm:p-12"
          >
            <Eyebrow>Next project</Eyebrow>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {next.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </p>
          </Link>
        </Container>
      )}
    </article>
  );
}
