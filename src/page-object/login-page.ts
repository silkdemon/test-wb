import { Locator, Page } from '@playwright/test';
import { getByTestId } from '../helpers/selector-helper';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  private getUsernameInput: Locator;
  private getPasswordInput: Locator;
  private getLoginButton: Locator;

  constructor(page: Page) {
    super(page, '');
    this.getUsernameInput = getByTestId(page, 'username'); // Using getByTestId for username input
    this.getPasswordInput = getByTestId(page, 'password'); // Using getByTestId for password input
    this.getLoginButton = getByTestId(page, 'login-button'); // Using getByTestId for login button
  }

  public async login(userName: string, password: string) {
    await this.getUsernameInput.fill(userName);
    await this.getPasswordInput.fill(password);
    await this.getLoginButton.click();
  }
}
