import { Locator, Page } from '@playwright/test';
import { getByTestId } from '../helpers/selector-helper';
import { getElementText } from '../helpers/utils';
import { BasePage } from './base-page';

export class MainPage extends BasePage {
  private inventoryItems: Locator;
  private itemDescription: Locator;
  private itemPrice: Locator;

  constructor(page: Page) {
    super(page, '');
    this.inventoryItems = getByTestId(page, 'inventory-item');
    this.itemDescription = getByTestId(page, 'inventory-item-desc');
    this.itemPrice = getByTestId(page, 'inventory-item-price');
  }

  private getItemTitleLocator(index: number) {
    return this.page.locator(`[data-test-id="item-${index}"]`);
  }

  /*   На всех кнопках добавить в корзину одинаковый паттерн построения локаторов: 
  он берется из названия предмета, поэтому, чтобы не хардкодить локаторы, 
  правильнее получать текст предмета и уже его преобразовывать в локатор */
  private async getAddToCartButtonLocator(index: number): Promise<Locator> {
    let itemText = await getElementText(this.getItemTitleLocator(index));
    itemText = itemText.toLowerCase();

    // Split the text by spaces and join with hyphens
    const locatorForCartButtonElement = itemText.split(' ').join('-');
    return this.page.locator(
      `[data-test-id="add-to-${locatorForCartButtonElement}"]`
    );
  }

  public async getItem(index: number) {
    let title: string;
    let description: string;
    let price: string;

    const count = await this.inventoryItems.count();

    for (let i = 0; i < count; i++) {
      const inventoryItem = this.inventoryItems.nth(i);
      title = await getElementText(this.getItemTitleLocator(index));

      const descriptionLocator = inventoryItem.locator(this.itemDescription);
      description = await getElementText(descriptionLocator);

      const priceLocator = inventoryItem.locator(this.itemPrice);
      price = await getElementText(priceLocator);
    }

    return { title, description, price };
  }

  public async addToCart(index: number) {
    (await this.getAddToCartButtonLocator(index)).click();
  }
}
