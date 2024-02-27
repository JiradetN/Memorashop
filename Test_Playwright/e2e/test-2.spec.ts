import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/en/');
  await page.getByRole('link', { name: 'Voucher Money 1000 baht' }).first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: ' Proceed to checkout' }).click();
  await page.getByRole('link', { name: 'Proceed to checkout' }).click();
  await page.getByRole('tab', { name: 'Sign in' }).click();
  await page.locator('#login-form #field-email').click();
  await page.locator('#login-form #field-email').fill('Kittipop_phetporee@kkumail.com');
  await page.locator('#login-form #field-email').press('Tab');
  await page.locator('#login-form').getByLabel('Password input').fill('Memorashop');
  await page.locator('#login-form').getByText('Continue').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Pay by bank wire').check();
  await page.getByRole('button', { name: 'Place order' }).click();
});