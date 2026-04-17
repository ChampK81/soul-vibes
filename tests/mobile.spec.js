const { test, expect } = require('@playwright/test');

// iPhone 13 viewport using Chrome — avoids webkit dependency
test.use({ viewport: { width: 390, height: 844 } });

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
  // Use the booking CTA in the #book section — always visible, not inside the hidden mobile nav
  const btn = page.locator('#book [data-open-booking]');
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
  await expect(page.locator('#booking-modal')).toHaveClass(/open/);
  await page.locator('#booking-modal-close').click();
  await expect(page.locator('#booking-modal')).not.toHaveClass(/open/);
});
