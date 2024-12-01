import { Locator, Page } from '@playwright/test';

export const getByTestId = (page: Page, element: string): Locator => {
  return page.getByTestId(element);
};
