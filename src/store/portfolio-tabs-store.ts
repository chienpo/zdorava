import { createStore, createEvent, Event } from 'effector';

import { PORTFOLIO_CATEGORY_TAB_NAME_ALL } from 'constants/portfolio';
import { router } from '../router';
import { $router } from './router-store';

export const setPortfolioCategory: Event<string> = createEvent();

export const $portfolioTabsStore = createStore(
  PORTFOLIO_CATEGORY_TAB_NAME_ALL
).on(setPortfolioCategory, (state: string, category: string) => category);

$router.watch(({ route }) => {
  if (router.isActive('portfolio')) {
    setPortfolioCategory(
      route.params.category || $portfolioTabsStore.defaultState
    );
  }
});

// Watcher
$portfolioTabsStore.watch(category => {
  if (router.isActive('portfolio')) {
    router.navigate('portfolio.category', { category });
  }
});
