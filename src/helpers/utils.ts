import { expect, Locator, Page } from '@playwright/test';

export const getElementText = async (element: Locator): Promise<string> => {
  const text = await element.textContent();
  return text ?? ''; // возвращаем пустую строку, если вернулся null
};

export const shouldSeeURL = (page: Page, expectedUrl: string) => {
  const currentUrl = page.url();
  expect(currentUrl).toBe(expectedUrl);
};

export const shouldSeeText = async (element: Locator, expectedText: string) => {
  expect(await getElementText(element)).toBe(expectedText);
};
