import { i18nMark } from '@lingui/react';

export const PORTFOLIO_CATEGORY_TAB_NAME_ALL = 'all';
// eslint-disable-next-line max-len
export const PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME = PORTFOLIO_CATEGORY_TAB_NAME_ALL;
export const PORTFOLIO_CATEGORY_TAB_NAME_ART = 'art';
export const PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND = 'frontend';

export const PORTFOLIO_CATEGORIES_TABS_LABELS: { [key: string]: string } = {
  [PORTFOLIO_CATEGORY_TAB_NAME_ALL]: i18nMark('All'),
  [PORTFOLIO_CATEGORY_TAB_NAME_ART]: i18nMark('Art'),
  [PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND]: i18nMark('Front-end'),
};

export const CHUNK_TYPE_ONE = 'CHUNK_TYPE_ONE';
export const CHUNK_TYPE_TWO = 'CHUNK_TYPE_TWO';
export const CHUNK_TYPE_THREE = 'CHUNK_TYPE_THREE';
