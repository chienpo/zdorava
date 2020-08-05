import { constants } from 'router5';

import { ROUTE_NAME_ABOUT, ROUTE_NAME_PORTFOLIO } from 'router/routes';

export const DARK_MODE = 'DARK_MODE';
export const LIGHT_MODE = 'LIGHT_MODE';
export const DEFAULT_THEME_MODE = DARK_MODE;

export const DEFAULT_ROUTE_THEME_MODES: { [key: string]: string } = {
  [ROUTE_NAME_ABOUT]: LIGHT_MODE,
  [ROUTE_NAME_PORTFOLIO]: LIGHT_MODE,
  [constants.UNKNOWN_ROUTE]: LIGHT_MODE,
};
