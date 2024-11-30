// BaseTest.ts

import { Page } from '@playwright/test';

export abstract class BasePage {
  protected constructor(
    protected page: Page,
    public url: string
  ) {}

  public async visit() {
    await this.page.goto(this.url);
  }
}
