import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/th/');
  await page.getByLabel('ตัวเลือกภาษา').click();
  await page.getByRole('link', { name: 'English' }).click();
});