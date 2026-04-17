const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'Home',         path: '/',                title: 'Soul Vibes' },
  { name: 'Work With Me', path: '/work-with-me.html', title: 'Work With Me' },
  { name: 'About',        path: '/about.html',       title: 'About Kayley' },
  { name: 'Contact',      path: '/contact.html',     title: 'Contact' },
];

for (const { name, path, title } of pages) {
  test(`${name} page loads with correct title`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res.status()).toBe(200);
    await expect(page).toHaveTitle(new RegExp(title));
  });
}

test('logo is visible on every page', async ({ page }) => {
  for (const { path } of pages) {
    await page.goto(path);
    const logo = page.locator('.brand img');
    await expect(logo).toBeVisible();
  }
});

test('nav links are present on every page', async ({ page }) => {
  for (const { path } of pages) {
    await page.goto(path);
    // Use header nav specifically to avoid matching footer nav duplicates
    await expect(page.locator('.site-header nav a', { hasText: 'Home' })).toBeVisible();
    await expect(page.locator('.site-header nav a', { hasText: 'Work With Me' })).toBeVisible();
    await expect(page.locator('.site-header nav a', { hasText: 'About' })).toBeVisible();
    await expect(page.locator('.site-header nav a', { hasText: 'Contact' })).toBeVisible();
  }
});

test('footer is present on every page', async ({ page }) => {
  for (const { path } of pages) {
    await page.goto(path);
    await expect(page.locator('.site-footer')).toBeVisible();
    await expect(page.locator('.site-footer')).toContainText('Soul Vibes');
    await expect(page.locator('.site-footer')).toContainText('kayley@soulvibes.ca');
  }
});

test('nav links navigate correctly', async ({ page }) => {
  await page.goto('/');
  await page.locator('.site-header nav a', { hasText: 'Work With Me' }).click();
  await expect(page).toHaveURL(/work-with-me/);

  await page.locator('.site-header nav a', { hasText: 'About' }).click();
  await expect(page).toHaveURL(/about/);

  await page.locator('.site-header nav a', { hasText: 'Contact' }).click();
  await expect(page).toHaveURL(/contact/);

  await page.locator('.site-header nav a', { hasText: 'Home' }).click();
  await expect(page).toHaveURL(/\/(index\.html)?$/);
});
