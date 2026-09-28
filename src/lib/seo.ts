import { profile } from "@/data/profile";

interface MetaInput {
  title: string;
  description: string;
  /** Path starting with "/" */
  path: string;
  /** Absolute https image URL, only when a real image exists. */
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

export const absoluteUrl = (path: string) => `${profile.siteUrl}${path === "/" ? "" : path}`;

/** Builds the head() object for a route. */
export function buildHead({ title, description, path, image, type = "website", noindex }: MetaInput) {
  const url = absoluteUrl(path);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: `${profile.name} — ${profile.title}` },
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image }, { name: "twitter:image", content: image });
  }
  if (noindex) meta.push({ name: "robots", content: "noindex" });
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export const jsonLd = (data: object) => ({
  type: "application/ld+json",
  children: JSON.stringify(data),
});
