import { createStore, createEvent, Event } from 'effector';

import { PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND } from '~/constants/portfolio';
import { STORAGE_ACTIVE_PORTFOLIO_CATEGORY_KEY } from './constants';

export const setPortfolioCategory: Event<string> = createEvent();

const defaultCategory =
  localStorage.getItem(STORAGE_ACTIVE_PORTFOLIO_CATEGORY_KEY) ||
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND;

export const $portfolioTabsStore = createStore(defaultCategory).on(
  setPortfolioCategory,
  (state: string, category: string) => {
    localStorage.setItem(STORAGE_ACTIVE_PORTFOLIO_CATEGORY_KEY, category);

    return category;
  }
);
