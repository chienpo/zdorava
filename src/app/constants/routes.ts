import { constants } from 'router5';
import { i18nMark } from '@lingui/react';

import { Route } from 'models/route.model';

import { DARK_MODE, LIGHT_MODE } from 'app/constants/theme';

export const ROUTE_NAME_HOME = 'home';
export const ROUTE_NAME_ABOUT = 'about';
export const ROUTE_NAME_PORTFOLIO = 'portfolio';
export const ROUTE_NAME_PORTFOLIO_PROJECT = 'portfolioProject';

export const routes: Route[] = [
  { name: ROUTE_NAME_HOME, title: i18nMark('Home'), path: '/' },
  { name: ROUTE_NAME_ABOUT, title: i18nMark('About'), path: '/about' },
  {
    name: 'portfolio',
    title: i18nMark('Portfolio'),
    path: '/portfolio',
  },
  { name: 'portfolioProject', title: 'Title', path: '/portfolio/project/:id' },
];

export const ROUTE_THEME_MODES: { [key: string]: string } = {
  [ROUTE_NAME_HOME]: DARK_MODE,
  [ROUTE_NAME_ABOUT]: LIGHT_MODE,
  [ROUTE_NAME_PORTFOLIO]: LIGHT_MODE,
  [constants.UNKNOWN_ROUTE]: LIGHT_MODE,
};
