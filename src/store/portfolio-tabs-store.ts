import { createStore, createEvent, Event } from 'effector';

import { PortfolioCategories } from '~/constants/portfolio';
import { STORAGE_KEY_ACTIVE_PORTFOLIO_CATEGORY } from './constants';

import { $router } from './router-store';
import { checkAuthLogoutHandler } from '~/store/auth-store';

export const setPortfolioCategory: Event<string> = createEvent();

const defaultCategory =
  localStorage.getItem(STORAGE_KEY_ACTIVE_PORTFOLIO_CATEGORY) ||
  PortfolioCategories.FrontEnd;

export const $portfolioTabsStore = createStore(defaultCategory).on(
  setPortfolioCategory,
  (state: string, category: string) => {
    localStorage.setItem(STORAGE_KEY_ACTIVE_PORTFOLIO_CATEGORY, category);

    return category;
  }
);

$router.watch(checkAuthLogoutHandler);
