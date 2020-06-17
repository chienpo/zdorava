import { i18nMark } from '@lingui/react';

import { Route } from 'models/route.model';

export const ROUTE_NAME_HOME = 'home';
export const ROUTE_NAME_ABOUT = 'about';
export const ROUTE_NAME_PORTFOLIO = 'portfolio';
export const ROUTE_NAME_PORTFOLIO_PROJECT = 'portfolioProject';

export const routes: Route[] = [
  { name: ROUTE_NAME_HOME, title: i18nMark('Home'), path: '/' },
  { name: ROUTE_NAME_ABOUT, title: i18nMark('About'), path: '/about' },
  {
    name: ROUTE_NAME_PORTFOLIO,
    title: i18nMark('Portfolio'),
    path: '/portfolio',
  },
  {
    name: ROUTE_NAME_PORTFOLIO_PROJECT,
    title: 'Title',
    path: '/portfolio/project/:id',
  },
];
