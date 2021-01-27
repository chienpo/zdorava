import { i18nMark } from '@lingui/react';
import { constants } from 'router5';

import {
  ROUTE_NAME_HOME,
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_PORTFOLIO,
  ROUTE_NAME_PROJECT,
  ROUTE_NAME_PROJECT_EDIT,
  ROUTE_NAME_SIGH_IN,
  ROUTE_NAME_PROJECTS_ADD,
} from '~/router/routes';
import {
  PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from './portfolio';

export const PAGE_TITLES: { [key: string]: string } = {
  [ROUTE_NAME_HOME]: i18nMark('Home'),
  [ROUTE_NAME_ABOUT]: i18nMark('About'),
  [ROUTE_NAME_PORTFOLIO]: i18nMark('Portfolio'),
  [ROUTE_NAME_SIGH_IN]: i18nMark('Sign in'),
  [ROUTE_NAME_PROJECT]: i18nMark('Project:'),
  [`${ROUTE_NAME_PROJECT}.${ROUTE_NAME_PROJECT_EDIT}`]: i18nMark(
    'Edit project:'
  ),
  [ROUTE_NAME_PROJECTS_ADD]: i18nMark('Add project'),
  [constants.UNKNOWN_ROUTE]: i18nMark('404'),
};

export const PORTFOLIO_PAGE_TITLES: { [key: string]: string } = {
  [PORTFOLIO_CATEGORY_TAB_NAME_ALL]: i18nMark('All projects'),
  [PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND]: i18nMark('Front-End projects'),
  [PORTFOLIO_CATEGORY_TAB_NAME_ART]: i18nMark('Art projects'),
};
