import { createStore, createEvent, Event } from 'effector';

import { DARK_MODE, DEFAULT_THEME_MODE, LIGHT_MODE } from '~/constants/theme';
import { STORAGE_SITE_THEME_KEY } from '~/store/constants';

export const toggleTheme: Event<boolean> = createEvent();

const defaultThemeMode =
  localStorage.getItem(STORAGE_SITE_THEME_KEY) || DEFAULT_THEME_MODE;

export const $themeStore = createStore(defaultThemeMode);

$themeStore.on(toggleTheme, (state: string, toggled: boolean) => {
  const theme = toggled ? LIGHT_MODE : DARK_MODE;

  localStorage.setItem(STORAGE_SITE_THEME_KEY, theme);

  return theme;
});
