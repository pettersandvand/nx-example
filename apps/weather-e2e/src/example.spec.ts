import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('has weather', async ({ page }) => {
  // Mock the backend API so the weather component renders without a live .NET server.
  // The app fetches cross-origin (http://localhost:5115) while the page itself is
  // served from http://localhost:4300, so the mocked response must include CORS
  // headers or the browser's fetch() will reject the response and the component
  // will silently fail to render (no try/catch around the fetch in weather.tsx).
  await page.route('http://localhost:5115/weatherforecast', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
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
  const content = page.getByText(/Temperature/).first();

  await expect(content).toBeVisible({ timeout: 10000 });
});
