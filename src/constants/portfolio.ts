import { i18nMark } from '@lingui/react';

export const PORTFOLIO_CATEGORY_TAB_NAME_ALL = 'all';
export const PORTFOLIO_CATEGORY_TAB_NAME_ART = 'art';
export const PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND = 'frontend';

export const CATEGORIES_DATA: { [key: string]: string }[] = [
  { value: PORTFOLIO_CATEGORY_TAB_NAME_ALL, label: i18nMark('All') },
  { value: PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND, label: i18nMark('Front-end') },
  { value: PORTFOLIO_CATEGORY_TAB_NAME_ART, label: i18nMark('Art') },
];

export const PORTFOLIO_CATEGORIES_TABS_LABELS: { [key: string]: string } = {
  [PORTFOLIO_CATEGORY_TAB_NAME_ALL]: i18nMark('All'),
  [PORTFOLIO_CATEGORY_TAB_NAME_ART]: i18nMark('Art'),
  [PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND]: i18nMark('Front-end'),
};

export const CHUNK_TYPE_ONE = 'CHUNK_TYPE_ONE';
export const CHUNK_TYPE_TWO = 'CHUNK_TYPE_TWO';
export const CHUNK_TYPE_THREE = 'CHUNK_TYPE_THREE';
