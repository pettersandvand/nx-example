import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('has weather', async ({ page }) => {
  await page.goto('/');
  const content = page.getByText("Temperature").first()

  await expect(content).toBeVisible();
});
