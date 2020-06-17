import { i18nMark } from '@lingui/react';
import { constants } from 'router5';

import {
  ROUTE_NAME_HOME,
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_PORTFOLIO,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from 'router/routes';

export const PAGE_TITLES: { [key: string]: string } = {
  [ROUTE_NAME_HOME]: i18nMark('Home'),
  [ROUTE_NAME_ABOUT]: i18nMark('About'),
  [ROUTE_NAME_PORTFOLIO]: i18nMark('Portfolio'),
  [ROUTE_NAME_PORTFOLIO_PROJECT]: i18nMark('Project:'),
  [constants.UNKNOWN_ROUTE]: i18nMark('404'),
};
