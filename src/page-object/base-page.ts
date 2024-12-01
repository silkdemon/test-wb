// BaseTest.ts

import { Page } from '@playwright/test';

const basicURL = 'https://www.saucedemo.com';

export abstract class BasePage {
  protected constructor(
    protected page: Page,
    protected urlPath: string
  ) {}

  public async visit() {
    await this.page.goto(`${basicURL}${this.urlPath}`);
  }

  public getTitle() {
    return this.page.getByTestId('title');
  }

  public getBasicURL() {
    return `${basicURL}${this.urlPath}`;
  }
}
