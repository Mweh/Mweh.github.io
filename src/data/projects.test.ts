import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { featuredProjects, getProject, publishedProjects } from "./projects";
import { isPlaceholder } from "@/lib/placeholder";
import { freelance } from "./freelance";

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
    ["revigurize", "https://apps.apple.com/us/app/revigurize/id6757760154"],
    ["love-in-the-sky", "https://apps.apple.com/us/app/love-in-the-sky/id6791453047"],
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

  test("Netherlands freelance work is Revigurize", () => {
    expect(freelance.find((entry) => entry.country === "Netherlands")?.projectSlug).toBe("revigurize");
    expect(getProject("revigurize")?.appStoreDescription?.[0]).toBe("Revigurize is your personal hair growth companion, designed to help you document your journey over a 7 month period.");
    expect(getProject("revigurize")?.gallery).toHaveLength(3);
  });

  test("US freelance work is Love In The Sky", () => {
    expect(freelance.find((entry) => entry.country === "United States")?.projectSlug).toBe("love-in-the-sky");
    expect(getProject("love-in-the-sky")?.appStoreDescription?.[0]).toBe("Love In The Sky (LITS) is aviation professionals dating app.");
    expect(getProject("love-in-the-sky")?.gallery).toHaveLength(3);
  });

  test("Qita includes Madrid investment and Nairobi onboarding contributions", () => {
    const role = getProject("qita-by-bri")?.caseStudy.role.join(" ") ?? "";
    expect(role).toContain("Squad Madrid (investment feature)");
    expect(role).toContain("Squad Nairobi (onboarding feature)");
    expect(role).toContain("Mockoon-based API mocking helper");
    expect(role).toContain("hot-reload compatibility");
    expect(role).toContain("refactoring UI flow");
  });

  test("MyTelkomsel uses MVVM-C and the supplied sprint allocation", () => {
    expect(getProject("mytelkomsel")?.technologies).toContain("MVVM-C");
    expect(getProject("mytelkomsel")?.technologies).toContain("GitLab CI/CD");
    expect(getProject("mytelkomsel")?.caseStudy.role.join(" ")).toContain("two weeks to developing new features and two weeks to bug fixing");
  });

  test("KoalaFit technical ownership includes Apple review", () => {
    expect(getProject("koalafit")?.caseStudy.role[0]).toBe("Owned all technical development for KoalaFit and handled App Store submission, including responding to Apple’s review requirements.");
  });

  test("MindMories CI/CD contribution links to the owner's article", () => {
    expect(getProject("mindmories")?.role).toBe("CI/CD implementation");
    expect(getProject("mindmories")?.links.find((link) => link.label === "TestFlight automation article")?.href).toBe("https://medium.com/@fahmianton/i-thought-setting-up-testflight-automation-would-take-30-minutes-40c3cca04fd5");
  });
});
