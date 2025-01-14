import { test, expect } from "@playwright/test";

test("should find input", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/index.html");

  const inputThatWorks = page.locator(`.this-works-fine`);
  await inputThatWorks.fill("Playwright");

  const inputThatDoesNotWork = page.locator(`.8bc9aa5f-f4e8-4f4f-a9ed-69a5e80a3bca`);
  await inputThatDoesNotWork.fill("Playwright");

  await page.waitForTimeout(10000);
});

