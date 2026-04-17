const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/contact.html');
});

test('contact form is visible', async ({ page }) => {
  await expect(page.locator('#contact-form')).toBeVisible();
});

test('all form fields are present', async ({ page }) => {
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#subject')).toBeVisible();
  await expect(page.locator('#message')).toBeVisible();
});

test('form points to correct Formspree endpoint', async ({ page }) => {
  const form = page.locator('#contact-form');
  await expect(form).toHaveAttribute('action', /formspree\.io\/f\/xvzdkwdw/);
});

test('submit button is present', async ({ page }) => {
  await expect(page.locator('button[type="submit"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toContainText('Send message');
});

test('subject dropdown has correct options', async ({ page }) => {
  const select = page.locator('#subject');
  await expect(select.locator('option', { hasText: '1:1 Yoga Therapy Session' })).toHaveCount(1);
  await expect(select.locator('option', { hasText: 'Workshop / Talk Enquiry' })).toHaveCount(1);
  await expect(select.locator('option', { hasText: 'General Question' })).toHaveCount(1);
});

test('email info block is visible', async ({ page }) => {
  await expect(page.locator('.info-block a[href="mailto:kayley@soulvibes.ca"]')).toBeVisible();
});

test('instagram info block links correctly', async ({ page }) => {
  const igLink = page.locator('.info-block a[href*="instagram.com"]');
  await expect(igLink).toBeVisible();
  await expect(igLink).toHaveAttribute('target', '_blank');
});

test('honeypot spam field is hidden', async ({ page }) => {
  const honeypot = page.locator('input[name="_gotcha"]');
  await expect(honeypot).toBeHidden();
});
