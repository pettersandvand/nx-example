import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('has weather', async ({ page }) => {
  // Mock the backend API so the weather component renders without a live .NET server.
  await page.route('**/weatherforecast', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          date: '2024-01-01',
          temperatureC: 20,
          temperatureF: 68,
          summary: 'Mild',
        },
      ]),
    });
  });

  await page.goto('/');
  const content = page.getByText('Temperature').first();

  await expect(content).toBeVisible();
});
