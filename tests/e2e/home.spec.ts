import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
    await page.goto('/'); // Uses baseURL from playwright.config.ts
    await expect(page.locator('body')).toBeVisible();
});