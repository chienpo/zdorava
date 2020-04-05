import { i18nMark } from '@lingui/react';

export const PORTFOLIO_CATEGORY_TAB_NAME_ALL = 'all';
export const PORTFOLIO_CATEGORY_TAB_NAME_ART = 'art';
export const PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND = 'frontend';

export const PORTFOLIO_CATEGORIES_TABS: { [key: string]: string } = {
  PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
};

export const PORTFOLIO_CATEGORIES_TABS_LABELS: { [key: string]: string } = {
  [PORTFOLIO_CATEGORY_TAB_NAME_ALL]: i18nMark('All projects'),
  [PORTFOLIO_CATEGORY_TAB_NAME_ART]: i18nMark('Art'),
  [PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND]: i18nMark('Front-end'),
};
