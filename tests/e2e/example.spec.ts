import { test, expect } from "@playwright/test";
test("home renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toContainText(/.+/); // page has some content
});
