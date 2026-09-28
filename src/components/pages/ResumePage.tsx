import { Download, Printer } from "lucide-react";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { featuredProjects } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";
import { Container, Eyebrow } from "@/components/common/Primitives";
import { TextValue } from "@/components/common/TextValue";
import { isPlaceholder } from "@/lib/placeholder";
import { Button } from "@/components/ui/button";

export function ResumePage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <header>
        <Eyebrow>Resume</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {profile.title} · {profile.experienceYears} years · <TextValue value={profile.location} />
        </p>
        <p className="mt-6 text-pretty">{profile.supportingStatement}</p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socialLinks.map((l) => (
            <li key={l.id}>
              <span className="text-muted-foreground">{l.label}: </span>
              <TextValue value={l.handle} />
            </li>
          ))}
        </ul>
        <div className="no-print mt-8 flex flex-wrap items-center gap-3">
          {isPlaceholder(profile.cvUrl) ? (
            <TextValue value={profile.cvUrl} />
          ) : (
            <Button asChild className="rounded-full">
              <a href={profile.cvUrl} download>
                Download CV <Download aria-hidden />
              </a>
            </Button>
          )}
          <Button variant="outline" className="rounded-full" onClick={() => window.print()}>
            Print <Printer aria-hidden />
          </Button>
        </div>
      </header>

      <section aria-labelledby="r-exp" className="mt-14 border-t pt-8">
        <h2 id="r-exp" className="text-sm font-semibold uppercase tracking-[0.12em]">Experience</h2>
        <ul className="mt-6 space-y-6">
          {experience.map((e) => (
            <li key={e.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.role}</h3>
                <span className="font-mono text-sm text-muted-foreground"><TextValue value={e.period} /></span>
              </div>
              <p className="text-muted-foreground"><TextValue value={e.organization} /></p>
              <p className="mt-1"><TextValue value={e.summary} /></p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="r-proj" className="mt-12 border-t pt-8">
        <h2 id="r-proj" className="text-sm font-semibold uppercase tracking-[0.12em]">Selected Projects</h2>
        <ul className="mt-6 space-y-4">
          {featuredProjects.map((p) => (
            <li key={p.slug}>
              <h3 className="font-semibold">
                {p.title} <span className="font-normal text-muted-foreground">· {p.category}</span>
              </h3>
              <p>{p.description}</p>
              <p className="text-sm text-muted-foreground">{p.technologies.join(", ")}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="r-skills" className="mt-12 border-t pt-8">
        <h2 id="r-skills" className="text-sm font-semibold uppercase tracking-[0.12em]">Skills</h2>
        <dl className="mt-6 space-y-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="grid gap-1 sm:grid-cols-[10rem_1fr]">
              <dt className="font-medium">{g.title}</dt>
              <dd className="text-foreground/80">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Container>
  );
}
