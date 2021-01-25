import { createStore, createEvent, Event } from 'effector';

import { Languages } from '~/constants/languages';
import { STORAGE_KEY_SITE_LANGUAGE } from '~/store/constants';

export const toggleLang: Event<string> = createEvent();

export const defaultLang =
  localStorage.getItem(STORAGE_KEY_SITE_LANGUAGE) || Languages.Pl;

export const $languageStore = createStore(defaultLang);

$languageStore.on(toggleLang, (state: string, lang: string) => {
  localStorage.setItem(STORAGE_KEY_SITE_LANGUAGE, lang);

  return lang;
});
