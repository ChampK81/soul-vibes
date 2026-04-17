const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/work-with-me.html');
});

test('all 4 offering cards are visible', async ({ page }) => {
  const cards = page.locator('.offering-card');
  await expect(cards).toHaveCount(4);
});

test('1:1 session card shows correct price', async ({ page }) => {
  await expect(page.locator('.offering-card').nth(0)).toContainText('$75');
  await expect(page.locator('.offering-card').nth(0)).toContainText('60 mins');
});

test('group offering card shows correct price', async ({ page }) => {
  await expect(page.locator('.offering-card').nth(1)).toContainText('$45');
  await expect(page.locator('.offering-card').nth(1)).toContainText('90 mins');
});

test('booking modal opens when Book a Session is clicked', async ({ page }) => {
  const modal = page.locator('#booking-modal');
  await expect(modal).not.toHaveClass(/open/);

  await page.locator('[data-open-booking]').first().click();

  await expect(modal).toHaveClass(/open/);
  await expect(page.locator('#acuity-iframe')).toBeVisible();
});

test('booking modal closes with X button', async ({ page }) => {
  await page.locator('[data-open-booking]').first().click();
  const modal = page.locator('#booking-modal');
  await expect(modal).toHaveClass(/open/);

  await page.locator('#booking-modal-close').click();
  await expect(modal).not.toHaveClass(/open/);
});

test('booking modal closes with Escape key', async ({ page }) => {
  await page.locator('[data-open-booking]').first().click();
  const modal = page.locator('#booking-modal');
  await expect(modal).toHaveClass(/open/);

  await page.keyboard.press('Escape');
  await expect(modal).not.toHaveClass(/open/);
});

test('booking modal closes by clicking backdrop', async ({ page }) => {
  await page.locator('[data-open-booking]').first().click();
  const modal = page.locator('#booking-modal');
  await expect(modal).toHaveClass(/open/);

  await modal.click({ position: { x: 10, y: 10 } });
  await expect(modal).not.toHaveClass(/open/);
});

test('Acuity iframe loads correct owner URL', async ({ page }) => {
  await page.locator('[data-open-booking]').first().click();
  const iframe = page.locator('#acuity-iframe');
  await expect(iframe).toHaveAttribute('src', /39014675/);
});

test('Group enquiry button links to contact page', async ({ page }) => {
  const btn = page.locator('a.btn', { hasText: 'Enquire About Group Sessions' });
  await expect(btn).toBeVisible();
  await expect(btn).toHaveAttribute('href', /contact/);
});

test('Workshop book button opens booking modal', async ({ page }) => {
  const btn = page.locator('button[data-open-booking]', { hasText: 'Book a Workshop' });
  await expect(btn).toBeVisible();
});

test('What is Yoga Therapy section is visible', async ({ page }) => {
  await expect(page.locator('.what-is-yoga')).toBeVisible();
});
