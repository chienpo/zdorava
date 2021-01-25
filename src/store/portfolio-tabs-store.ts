import { createStore, createEvent, Event } from 'effector';

import { PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND } from '~/constants/portfolio';
import { STORAGE_KEY_ACTIVE_PORTFOLIO_CATEGORY } from './constants';

export const setPortfolioCategory: Event<string> = createEvent();

const defaultCategory =
  localStorage.getItem(STORAGE_KEY_ACTIVE_PORTFOLIO_CATEGORY) ||
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND;

export const $portfolioTabsStore = createStore(defaultCategory).on(
  setPortfolioCategory,
  (state: string, category: string) => {
    localStorage.setItem(STORAGE_KEY_ACTIVE_PORTFOLIO_CATEGORY, category);

    return category;
  }
);
