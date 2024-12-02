// BaseTest.ts

import { Page } from '@playwright/test';

const basicURL = 'https://www.saucedemo.com';

export abstract class BasePage {
  protected constructor(
    protected page: Page,
    protected urlPath: string
  ) {}

  public getBasicURL() {
    return `${basicURL}${this.urlPath}`;
  }

  public async visit() {
    await this.page.goto(this.getBasicURL());
  }

  public getTitle() {
    return this.page.getByTestId('title');
  }
}
