import { Locator, Page } from '@playwright/test';
import { getByTestId } from '../helpers/selector-helper';
import { getElementText } from '../helpers/utils';
import { HeaderComponent } from './header-component';

const urlPath = '/cart.html';

export class CartPage extends HeaderComponent {
  public urlPath;
  private inventoryItems: Locator;
  private itemDescription: Locator;
  private itemPrice: Locator;
  private backToShoppingButton: Locator;
  private checkoutButton: Locator;

  constructor(page: Page) {
    super(page, urlPath);
    this.urlPath = urlPath;
    this.inventoryItems = getByTestId(page, 'inventory-item');
    this.itemDescription = getByTestId(page, 'inventory-item-desc');
    this.itemPrice = getByTestId(page, 'inventory-item-price');
    this.backToShoppingButton = getByTestId(page, 'continue-shopping');
    this.checkoutButton = getByTestId(page, 'checkout');
  }

  private getItemTitleLocator(index: number) {
    return this.page.locator(`[data-test="item-${index}-title-link"]`);
  }

  /*   На всех кнопках добавить в корзину одинаковый паттерн построения локаторов: 
  он берется из названия предмета, поэтому, чтобы не хардкодить локаторы, 
  правильнее получать текст предмета и уже его преобразовывать в локатор */
  private async getRemoveButtonLocator(index: number): Promise<Locator> {
    let itemText = await getElementText(this.getItemTitleLocator(index));
    itemText = itemText.toLowerCase();

    const locatorForRemoveButtonElement = itemText.split(' ').join('-');
    return this.page.locator(`$remove-${locatorForRemoveButtonElement}"]`);
  }

  public async getItem(index: number) {
    const count = await this.inventoryItems.count();

    if (index < 0 || index >= count) {
      throw new Error(
        `Index: ${index} is out of bounds. Total items: ${count}`
      );
    }
    const inventoryItem = this.inventoryItems.nth(index);
    const title = await getElementText(this.getItemTitleLocator(index));
    const descriptionLocator = inventoryItem.locator(this.itemDescription);
    const description = await getElementText(descriptionLocator);
    const priceLocator = inventoryItem.locator(this.itemPrice);
    const price = await getElementText(priceLocator);
    return { title, description, price };
  }

  public async removeItem(index: number) {
    await (await this.getRemoveButtonLocator(index)).click();
  }

  public async returnToShopping() {
    await this.backToShoppingButton.click();
  }

  public async checkout() {
    await this.checkoutButton.click();
  }
}
