import { defineMessage } from '@lingui/macro';
import { constants } from 'router5';

import { MessageDescriptor } from '@lingui/core';
import {
  ROUTE_NAME_HOME,
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_PORTFOLIO,
  ROUTE_NAME_PROJECT,
  ROUTE_NAME_PROJECT_EDIT,
  ROUTE_NAME_SIGH_IN,
  ROUTE_NAME_PROJECTS_ADD,
} from '~/router/routes';
import { PortfolioCategories } from './portfolio';

export const PAGE_TITLES = {
  [ROUTE_NAME_HOME]: defineMessage({ message: 'Home' }),
  [ROUTE_NAME_ABOUT]: defineMessage({ message: 'About' }),
  [ROUTE_NAME_PORTFOLIO]: defineMessage({ message: 'Portfolio' }),
  [ROUTE_NAME_SIGH_IN]: defineMessage({ message: 'Sign in' }),
  [ROUTE_NAME_PROJECT]: defineMessage({ message: 'Project:' }),
  [`${ROUTE_NAME_PROJECT}.${ROUTE_NAME_PROJECT_EDIT}`]: defineMessage({
    message: 'Edit project:',
  }),
  [ROUTE_NAME_PROJECTS_ADD]: defineMessage({ message: 'Add project' }),
  [constants.UNKNOWN_ROUTE]: defineMessage({ message: '404' }),
};

export const PORTFOLIO_PAGE_TITLES: { [key: string]: MessageDescriptor } = {
  [PortfolioCategories.All]: defineMessage({ message: 'All projects' }),
  [PortfolioCategories.Art]: defineMessage({ message: 'Art projects' }),
  [PortfolioCategories.FrontEnd]: defineMessage({
    message: 'Front-End projects',
  }),
};
