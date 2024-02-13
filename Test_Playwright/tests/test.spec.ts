import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/en/');
  await page.getByRole('link', { name: 'Vocher Money 500 baht' }).first().click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('link', { name: 'College of Computing Shop' }).click();
  await page.getByRole('link', { name: 'Vocher Money 1000 baht' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: ' Proceed to checkout' }).click();
  await page.getByRole('link', { name: 'Proceed to checkout' }).click();
  await page.getByLabel('Mr.').check();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('Tasy');
  await page.getByLabel('Last name').click();
  await page.getByLabel('Last name').fill('Tast');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('Tasty3@gmail.com');
  await page.getByRole('textbox', { name: 'Password input' }).click();
  await page.getByRole('textbox', { name: 'Password input' }).fill('Tasty1523');
  await page.getByText(' Customer data privacyThe').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Country').selectOption('204');
  await page.getByLabel('Address', { exact: true }).click();
  await page.getByLabel('Address', { exact: true }).fill('kku');
  await page.getByLabel('Zip/Postal Code').click();
  await page.getByLabel('Zip/Postal Code').fill('40000');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('kku');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('I agree to the terms of').check();
  await page.getByRole('button', { name: 'Place order' }).click();
  await page.getByLabel('แนบสลิปการโอน').click();
  await page.getByLabel('แนบสลิปการโอน').setInputFiles('377122143_1289622958335457_1639530504254319811_n.jpg');
  await page.getByRole('button', { name: 'Upload' }).click();
});