import { Locator, Page } from '@playwright/test';
import { getByTestId } from '../helpers/selector-helper';
import { BasePage } from './base-page';

export class HeaderComponent extends BasePage {
  private cartLink: Locator;
  public itemCount: Locator;

  constructor(page: Page, urlPath: string) {
    super(page, urlPath);
    this.cartLink = getByTestId(page, 'shopping-cart-link');
    this.itemCount = getByTestId(page, 'shopping-cart-badge');
  }

  public async goToCart() {
    await this.cartLink.click();
  }
}
