import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy } from "@/components/project/CaseStudy";
import { Container } from "@/components/common/Primitives";
import { getProject } from "@/data/projects";
import { profile } from "@/data/profile";
import { absoluteUrl, buildHead, jsonLd } from "@/lib/seo";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const project = loaderData ? getProject(loaderData.slug) : undefined;
    if (!project) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const image = project.heroImage?.src.startsWith("https://") ? project.heroImage.src : undefined;
    return {
      ...buildHead({
        title: `${project.title} — Case study by ${profile.name}`,
        description: project.summary,
        path: `/work/${project.slug}`,
        type: "article",
        image,
      }),
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          url: absoluteUrl(`/work/${project.slug}`),
          author: { "@type": "Person", name: profile.name },
          keywords: project.technologies.join(", "),
        }),
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug);
  return project ? <CaseStudy project={project} /> : <ProjectNotFound />;
}

function ProjectNotFound() {
  return (
    <Container className="py-32">
      <h1 className="text-4xl font-semibold tracking-tight">Project not found</h1>
      <Link to="/work" className="mt-6 inline-block text-accent hover:underline">
        ← All work
      </Link>
    </Container>
  );
}
