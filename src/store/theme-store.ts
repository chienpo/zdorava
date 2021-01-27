import { createStore, createEvent, Event } from 'effector';

import { DARK_MODE, DEFAULT_THEME_MODE, LIGHT_MODE } from '~/constants/theme';
import { STORAGE_KEY_SITE_THEME } from '~/store/constants';

export const toggleTheme: Event<boolean> = createEvent();

const defaultThemeMode =
  localStorage.getItem(STORAGE_KEY_SITE_THEME) || DEFAULT_THEME_MODE;

export const $themeStore = createStore(defaultThemeMode);

$themeStore.on(toggleTheme, (state: string, toggled: boolean) => {
  const theme = toggled ? LIGHT_MODE : DARK_MODE;

  localStorage.setItem(STORAGE_KEY_SITE_THEME, theme);

  return theme;
});
