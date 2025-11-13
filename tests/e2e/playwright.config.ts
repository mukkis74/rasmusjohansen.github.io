import { defineConfig } from "@playwright/test";
export default defineConfig({
  reporter: [
    ["line"],
    ["html", { outputFolder: "reports/playwright/html", open: "never" }],
    ["allure-playwright"]
  ],
  use: { baseURL: process.env.BASE_URL || "http://localhost:8080" },
  outputDir: "reports/playwright/test-output"
});
