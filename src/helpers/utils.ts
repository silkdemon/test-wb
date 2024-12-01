import { Locator } from '@playwright/test';

export const getElementText = async (element: Locator): Promise<string> => {
  const text = await element.textContent();
  return text ?? ''; // возвращаем пустую строку, если вернулся null
};
