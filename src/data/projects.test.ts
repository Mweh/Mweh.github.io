import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { featuredProjects, getProject, publishedProjects } from "./projects";
import { isPlaceholder } from "@/lib/placeholder";

describe("projects", () => {
  test("unpublished projects (Arterious) are hidden", () => {
    expect(publishedProjects.some((p) => p.slug === "arterious")).toBe(false);
    expect(getProject("arterious")).toBeUndefined();
  });

  test("featured projects are all published", () => {
    expect(featuredProjects.every((p) => p.published)).toBe(true);
  });

  test("every published project gets a prerendered page", () => {
    const config = readFileSync("vite.config.ts", "utf8");
    const match = config.match(/const projectSlugs = \[([^\]]*)\]/);
    const slugs = [...(match?.[1] ?? "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    expect(slugs.sort()).toEqual(publishedProjects.map((p) => p.slug).sort());
  });

  test("placeholder links are detectable so they are never rendered", () => {
    const brimo = getProject("brimo");
    expect(brimo?.links.every((l) => isPlaceholder(l.href))).toBe(true);
  });
});
