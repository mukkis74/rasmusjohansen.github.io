import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 30_000,                  // per-test timeout
  expect: { timeout: 10_000 },      // assertion timeout
  retries: process.env.CI ? 2 : 0,  // auto-retry in CI
  workers: 1,                       // avoid race with tiny servers

  reporter: [
    ["line"],
    ["html", { outputFolder: "reports/playwright/html", open: "never" }],
    ["allure-playwright"]
  ],

  use: {
    baseURL: process.env.BASE_URL || "http://localhost:8080",
    trace: "on-first-retry",        // collect trace on flaky failures
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  outputDir: "reports/playwright/test-output"
});
