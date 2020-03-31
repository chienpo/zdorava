import { i18nMark } from '@lingui/react';

const PAGE_HOME = 'home';
export const PAGE_ABOUT = 'about';
const PAGE_PORTFOLIO = 'portfolio';

export const PAGE_TITLES: { [key: string]: string } = {
  [PAGE_HOME]: i18nMark('Home'),
  [PAGE_ABOUT]: i18nMark('About'),
  [PAGE_PORTFOLIO]: i18nMark('Portfolio'),
};
