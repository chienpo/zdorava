import { createStore, createEvent, Event } from 'effector';

import { Languages } from '~/constants/languages';

export const toggleLang: Event<string> = createEvent();

const STORAGE_SITE_LANGUAGE_KEY = 'SITE_LANGUAGE';
export const defaultLang =
  localStorage.getItem(STORAGE_SITE_LANGUAGE_KEY) || Languages.En;

export const $languageStore = createStore(defaultLang);

$languageStore.on(toggleLang, (state: string, lang: string) => {
  localStorage.setItem(STORAGE_SITE_LANGUAGE_KEY, lang);

  return lang;
});
