import { constants } from 'router5';
import { DARK_MODE, LIGHT_MODE } from 'app/constants/theme';

export const ROUTE_NAME_HOME = 'home';
export const ROUTE_NAME_ABOUT = 'about';
export const ROUTE_NAME_PORTFOLIO = 'portfolio';

export const routes = [
  { name: ROUTE_NAME_HOME, path: '/' },
  { name: ROUTE_NAME_ABOUT, path: '/about' },
  { name: ROUTE_NAME_PORTFOLIO, path: '/portfolio' },
];

export const ROUTE_THEME_MODES: { [key: string]: string } = {
  [ROUTE_NAME_HOME]: DARK_MODE,
  [ROUTE_NAME_ABOUT]: LIGHT_MODE,
  [ROUTE_NAME_PORTFOLIO]: DARK_MODE,
  [constants.UNKNOWN_ROUTE]: LIGHT_MODE,
};
