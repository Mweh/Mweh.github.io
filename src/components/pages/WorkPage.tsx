import { projectCategories, publishedProjects } from "@/data/projects";
import { Container, Eyebrow } from "@/components/common/Primitives";
import { ProjectCard } from "@/components/project/ProjectCard";

export function WorkPage() {
  return (
    <Container className="py-16 sm:py-24">
      <header className="animate-enter max-w-3xl">
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-3 text-5xl font-semibold tracking-[-0.035em] sm:text-6xl">Selected Work</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Production iOS applications, independent App Store projects, and Apple Developer Academy product experiments.
        </p>
      </header>
      {projectCategories.map((cat) => {
        const items = publishedProjects.filter((p) => p.category === cat);
        if (!items.length) return null;
        const id = `cat-${cat.replace(/\W+/g, "-").toLowerCase()}`;
        return (
          <section key={cat} aria-labelledby={id} className="mt-20 border-t pt-10">
            <h2 id={id} className="mb-10 font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground">
              {cat === "Apple Developer Academy" ? "Selected Apple Developer Academy Projects" : cat}
            </h2>
            <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        );
      })}
    </Container>
  );
}
