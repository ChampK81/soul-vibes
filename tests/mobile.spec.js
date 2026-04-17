const { test, expect, devices } = require('@playwright/test');

// Run these tests at mobile viewport
test.use({ ...devices['iPhone 13'] });

const pages = ['/', '/work-with-me.html', '/about.html', '/contact.html'];

for (const path of pages) {
  test(`${path} — mobile nav toggle is visible`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('.nav-toggle')).toBeVisible();
  });

  test(`${path} — mobile nav opens and closes`, async ({ page }) => {
    await page.goto(path);
    const nav = page.locator('#main-nav');
    await expect(nav).not.toHaveClass(/open/);

    await page.locator('.nav-toggle').click();
    await expect(nav).toHaveClass(/open/);

    await page.locator('.nav-toggle').click();
    await expect(nav).not.toHaveClass(/open/);
  });
}

test('booking modal works on mobile', async ({ page }) => {
  await page.goto('/work-with-me.html');
  await page.locator('[data-open-booking]').first().click();
  await expect(page.locator('#booking-modal')).toHaveClass(/open/);
  await page.locator('#booking-modal-close').click();
  await expect(page.locator('#booking-modal')).not.toHaveClass(/open/);
});
