import { test } from '@playwright/test';
import { shouldSeeText } from '../helpers/utils';
import { LoginPage } from '../page-object/login-page';
import { MainPage } from '../page-object/main-page';

test('add two items to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const userName = 'standard_user';
  const password = 'secret_sauce';
  await loginPage.visit();
  await loginPage.login(userName, password);

  await mainPage.addToCart(0);
  await mainPage.addToCart(1);

  await shouldSeeText(mainPage.itemCount, '2');
});
