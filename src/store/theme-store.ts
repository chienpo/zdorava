import { createStore, createEvent, Event } from 'effector';

import { ThemeModes } from '~/constants/theme';
import { STORAGE_KEY_SITE_THEME } from '~/store/constants';

export const toggleTheme: Event<boolean> = createEvent();

const defaultThemeMode =
  localStorage.getItem(STORAGE_KEY_SITE_THEME) || ThemeModes.Dark;

export const $themeStore = createStore(defaultThemeMode);

$themeStore.on(toggleTheme, (state: string, toggled: boolean) => {
  const theme = toggled ? ThemeModes.Light : ThemeModes.Dark;

  localStorage.setItem(STORAGE_KEY_SITE_THEME, theme);

  return theme;
});
