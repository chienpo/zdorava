import { constants } from 'router5';

import {
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_PROJECT,
  ROUTE_NAME_PROJECT_EDIT,
  ROUTE_NAME_PROJECTS_ADD,
  ROUTE_NAME_SIGH_IN,
} from '~/router/routes';

export enum ThemeModes {
  Dark = 'Dark',
  Light = 'Light',
}

export const DEFAULT_ROUTE_THEME_MODES: { [key: string]: string } = {
  [ROUTE_NAME_ABOUT]: ThemeModes.Light,
  [ROUTE_NAME_PROJECT]: ThemeModes.Light,
  [ROUTE_NAME_SIGH_IN]: ThemeModes.Light,
  [ROUTE_NAME_PROJECTS_ADD]: ThemeModes.Light,
  [`${ROUTE_NAME_PROJECT}.${ROUTE_NAME_PROJECT_EDIT}`]: ThemeModes.Light,
  [constants.UNKNOWN_ROUTE]: ThemeModes.Light,
};
