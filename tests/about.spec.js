const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/about.html');
});

test('Kayley\'s name is visible', async ({ page }) => {
  await expect(page.locator('h2', { hasText: 'Kayley Champagne' })).toBeVisible();
});

test('credentials section is visible', async ({ page }) => {
  await expect(page.locator('.credentials-list')).toBeVisible();
  await expect(page.locator('.credentials-list')).toContainText('CYT-500');
});

test('bio photo is present', async ({ page }) => {
  const photo = page.locator('.bio-photo img');
  await expect(photo).toBeVisible();
  await expect(photo).toHaveAttribute('src', /kayley/);
});

test('land acknowledgement is visible', async ({ page }) => {
  await expect(page.locator('.land-ack')).toBeVisible();
  await expect(page.locator('.land-ack')).toContainText('Treaty 7');
});

test('values cards are visible', async ({ page }) => {
  const cards = page.locator('.three-col .card');
  await expect(cards).toHaveCount(3);
});

test('CTA buttons link correctly', async ({ page }) => {
  await expect(page.locator('a.btn', { hasText: 'See offerings' })).toHaveAttribute('href', /work-with-me/);
  await expect(page.locator('a.btn', { hasText: 'Send a message' })).toHaveAttribute('href', /contact/);
});
