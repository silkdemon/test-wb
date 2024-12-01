import { test } from '@playwright/test';
import { LoginPage } from '../page-object/login-page';

test('succes login', async ({ page }) => {
  const userName = 'standard_user';
  const password = 'secret_sauce';
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  // await page.goto('https://www.saucedemo.com/');

  await loginPage.login(userName, password);
});
