import { test } from '@playwright/test';
import { shouldSeeText } from '../helpers/utils';
import { LoginPage } from '../page-object/login-page';
import { MainPage } from '../page-object/main-page';

test('succes login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  const userName = 'standard_user';
  const password = 'secret_sauce';
  await loginPage.visit();
  await loginPage.login(userName, password);

  console.log(mainPage.getBasicURL());

  // shouldSeeURL(page, mainPage);
  await shouldSeeText(mainPage.getTitle(), 'Products');
});
