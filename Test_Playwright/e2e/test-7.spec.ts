import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/en/');
  await page.getByRole('link', { name: 'Voucher Money 1000 baht' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('link', { name: 'Voucher Money 500 baht' }).first().click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByLabel('Shopping cart link containing').click();
});