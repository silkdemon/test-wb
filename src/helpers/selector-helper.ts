import { Page } from '@playwright/test';

export const getByTestId = async (page: Page, element: string) => {
  return page.goto(url);
};
