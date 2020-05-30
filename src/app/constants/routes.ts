import { constants } from 'router5';
import { i18nMark } from '@lingui/react';

import { DARK_MODE, LIGHT_MODE } from 'app/constants/theme';
import { Route } from 'models/route.model';

export const ROUTE_NAME_HOME = 'home';
export const ROUTE_NAME_ABOUT = 'about';
export const ROUTE_NAME_PORTFOLIO = 'portfolio';

export const routes: Route[] = [
  { name: ROUTE_NAME_HOME, title: i18nMark('Home'), path: '/' },
  { name: ROUTE_NAME_ABOUT, title: i18nMark('Resume'), path: '/about' },
  {
    name: ROUTE_NAME_PORTFOLIO,
    title: i18nMark('Portfolio'),
    path: '/portfolio',
  },
];

export const ROUTE_THEME_MODES: { [key: string]: string } = {
  [ROUTE_NAME_HOME]: DARK_MODE,
  [ROUTE_NAME_ABOUT]: LIGHT_MODE,
  [ROUTE_NAME_PORTFOLIO]: LIGHT_MODE,
  [constants.UNKNOWN_ROUTE]: LIGHT_MODE,
};
