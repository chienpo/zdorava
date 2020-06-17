import { constants } from 'router5';

import {
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
} from 'router/routes';

export const DARK_MODE = 'dark';
export const LIGHT_MODE = 'light';

export const ROUTE_THEME_MODES: { [key: string]: string } = {
  [ROUTE_NAME_HOME]: DARK_MODE,
  [ROUTE_NAME_ABOUT]: LIGHT_MODE,
  [ROUTE_NAME_PORTFOLIO]: LIGHT_MODE,
  [constants.UNKNOWN_ROUTE]: LIGHT_MODE,
};
