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
    const marble = getProject("marble");
    expect(marble?.links.every((l) => isPlaceholder(l.href))).toBe(true);
  });

  for (const [slug, href] of [
    ["koalafit", "https://apps.apple.com/us/app/koalafit/id6774622691"],
    ["mindmories", "https://apps.apple.com/id/app/mindmories/id6786116342"],
    ["qita-by-bri", "https://apps.apple.com/id/app/qita-by-bri/id6747552980"],
    ["mytelkomsel", "https://apps.apple.com/id/app/mytelkomsel/id651412430"],
  ]) {
    test(`${slug} uses the owner's official App Store link`, () => {
      expect(getProject(slug ?? "")?.links.find((l) => l.label === "App Store")?.href).toBe(href);
    });
  }

  test("Qita by BRI replaces BRImo", () => {
    expect(getProject("qita-by-bri")?.title).toBe("Qita by BRI");
    expect(getProject("brimo")).toBeUndefined();
  });

  test("One More Inch is removed from the portfolio", () => {
    expect(getProject("one-more-inch")).toBeUndefined();
    expect(publishedProjects.some((p) => p.title === "One More Inch")).toBe(false);
  });
});
