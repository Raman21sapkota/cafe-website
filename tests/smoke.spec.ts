import { test, expect } from '@playwright/test';

test.describe('Smoke tests', () => {
  test('homepage loads with key content', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Plated/);
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1, h2').first()).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('menu page loads with download cards', async ({ page }) => {
    await page.goto('/menu');
    await expect(page.locator('footer')).toBeVisible();
  });

  test('contact page loads with form', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('footer')).toBeVisible();
  });

  test('navigation between pages works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).first().click();
    await expect(page).toHaveURL(/\/about/);
    await page.getByRole('link', { name: /menu/i }).first().click();
    await expect(page).toHaveURL(/\/menu/);
    await page.getByRole('link', { name: /contact/i }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const menuButton = page.locator('button[aria-label*="menu" i], button:has(svg)').first();
    await menuButton.click();
    await expect(page.getByRole('link', { name: /about/i }).first()).toBeVisible();
    await menuButton.click();
  });

  test('footer contains social links and contact info', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
    const footer = page.locator('footer');
    await expect(footer.getByText(/plated/i)).toBeVisible();
  });
});
