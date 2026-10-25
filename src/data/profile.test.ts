import { expect, test } from "bun:test";
import { profile } from "./profile";

test("experience remains the owner's confirmed 3+ years", () => {
  expect(profile.experienceYears).toBe("3+");
});