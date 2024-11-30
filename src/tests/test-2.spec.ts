import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('s');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('s');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(
    page
      .locator('[data-test="inventory-list"] div')
      .filter({ hasText: 'Sauce Labs Backpackcarry.' })
      .first()
  ).toBeVisible();
  await expect(
    page.locator(
      '[data-test="item-4-title-link"] [data-test="inventory-item-name"]'
    )
  ).toContainText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="inventory-list"]')).toContainText(
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
  );
  await expect(page.locator('[data-test="inventory-list"]')).toContainText(
    '$29.99'
  );
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText(
    '1'
  );
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText(
    'Sauce Labs Backpack'
  );
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText(
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
  );
  await expect(
    page.locator('[data-test="inventory-item-price"]')
  ).toContainText('$29.99');
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText(
    'Checkout: Your Information'
  );
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('m');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('m');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('1');
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText(
    'Checkout: Overview'
  );
  await expect(page.locator('[data-test="item-quantity"]')).toContainText('1');
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText(
    'Sauce Labs Backpack'
  );
  await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText(
    'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
  );
  await expect(
    page.locator('[data-test="inventory-item-price"]')
  ).toContainText('$29.99');
  await expect(page.locator('[data-test="payment-info-value"]')).toContainText(
    'SauceCard #31337'
  );
  await expect(page.locator('[data-test="shipping-info-value"]')).toContainText(
    'Free Pony Express Delivery!'
  );
  await expect(page.locator('[data-test="subtotal-label"]')).toContainText(
    'Item total: $29.99'
  );
  await expect(page.locator('[data-test="tax-label"]')).toContainText(
    'Tax: $2.40'
  );
  await expect(page.locator('[data-test="total-label"]')).toContainText(
    'Total: $32.39'
  );
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText(
    'Checkout: Complete!'
  );
  await expect(page.locator('[data-test="complete-header"]')).toContainText(
    'Thank you for your order!'
  );
});
