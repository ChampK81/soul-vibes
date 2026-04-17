const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('hero heading is visible', async ({ page }) => {
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('h1')).toContainText('nervous system');
});

test('hero CTA buttons are present and link correctly', async ({ page }) => {
  const exploreBtn = page.locator('a.btn', { hasText: 'Explore ways to work together' });
  await expect(exploreBtn).toBeVisible();
  await expect(exploreBtn).toHaveAttribute('href', /work-with-me/);

  const aboutBtn = page.locator('a.btn', { hasText: 'About Soul Vibes' });
  await expect(aboutBtn).toBeVisible();
});

test('three info cards are visible', async ({ page }) => {
  const cards = page.locator('.three-col .card');
  await expect(cards).toHaveCount(3);
});

test('image break section is visible', async ({ page }) => {
  await expect(page.locator('.image-break')).toBeVisible();
});

test('email link in footer works', async ({ page }) => {
  const emailLink = page.locator('a[href="mailto:kayley@soulvibes.ca"]').first();
  await expect(emailLink).toBeVisible();
});

test('instagram link in footer works', async ({ page }) => {
  const igLink = page.locator('a[href*="instagram.com/kc.soulvibes"]').first();
  await expect(igLink).toBeVisible();
  await expect(igLink).toHaveAttribute('target', '_blank');
});
