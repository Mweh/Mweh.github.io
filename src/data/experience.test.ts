import { expect, test } from "bun:test";
import { experience, education } from "./experience";

test("CV experience preserves all six organizations and supplied dates", () => {
  expect(experience.map(({ id, period }) => [id, period])).toEqual([
    ["revigurize", "Dec 2025 – Present"],
    ["qita", "Jun 2025 – Apr 2026"],
    ["raisecall", "Jan 2025 – May 2025"],
    ["mytelkomsel", "Sep 2023 – Feb 2025"],
    ["myedusolve", "Aug 2021 – Dec 2022"],
    ["umi", "Feb 2021 – Jul 2022"],
  ]);
});

test("Academy completion remains expected, not a completed qualification", () => {
  expect(education.find((entry) => entry.id === "apple")?.period).toBe("Feb 2026 – Dec 2026 (Expected)");
});

test("CV education contains all four qualifications and exact degree GPA", () => {
  expect(education.map((entry) => entry.id)).toEqual(["apple", "umi-degree", "ui", "darmstadt"]);
  expect(education.find((entry) => entry.id === "umi-degree")?.summary).toBe("GPA: 3.98/4.00 · Magna Cumlaude.");
});

test("Apple Developer Academy and Universitas Indonesia show their official logos", () => {
  expect(education.find((entry) => entry.id === "apple")?.image?.alt).toBe("Apple logo");
  expect(education.find((entry) => entry.id === "ui")?.image?.alt).toBe("Universitas Indonesia emblem");
});