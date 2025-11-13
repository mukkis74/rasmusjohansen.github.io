// tests/e2e/example.spec.ts
import { test, expect } from "@playwright/test";

test("home renders and health is OK", async ({ page, request }) => {
  // Sanity: API up?
  const res = await request.get("/health");
  expect(res.status(), "health must be 200").toBe(200);

  // Now UI
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const bodyText = await page.locator("body").textContent();
  expect(bodyText ?? "").not.toEqual("");  // some content is present
});
