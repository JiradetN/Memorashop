import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/en/');
  await page.getByLabel('Language dropdown').click();
  await page.getByRole('link', { name: 'ภาษาไทย' }).click();
});