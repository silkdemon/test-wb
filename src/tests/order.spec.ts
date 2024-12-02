import { test } from '@playwright/test';
import { assertEquality, shouldSeeText, shouldSeeURL } from '../helpers/utils';
import { CartPage } from '../page-object/cart-page';
import { LoginPage } from '../page-object/login-page';
import { MainPage } from '../page-object/main-page';

test('succesful order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const cartPage = new CartPage(page);
  const userName = 'standard_user';
  const password = 'secret_sauce';
  await loginPage.visit();
  await loginPage.login(userName, password);

  const expectedResult1 = await mainPage.getItem(0);
  const expectedResult2 = await mainPage.getItem(1);

  await mainPage.addToCart(0);
  await mainPage.addToCart(1);
  await mainPage.goToCart();

  shouldSeeURL(page, cartPage.getBasicURL());
  await shouldSeeText(cartPage.getTitle(), 'Your Cart');

  const actualResult1 = await cartPage.getItem(0);
  const actualResult2 = await cartPage.getItem(1);

  console.log('1: ' + JSON.stringify(actualResult1));
  // здесь баг поправить
  console.log('2: ' + JSON.stringify(expectedResult1));

  assertEquality(actualResult1, expectedResult1);
  assertEquality(actualResult2, expectedResult2);
});
