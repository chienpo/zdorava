import { createStore, createEvent, Event } from 'effector';

import { EN } from '~/constants/languages';

export const toggleLang: Event<string> = createEvent();

const STORAGE_SITE_LANGUAGE_KEY = 'SITE_LANGUAGE';
const defaultLang = localStorage.getItem(STORAGE_SITE_LANGUAGE_KEY) || EN;

export const $languageStore = createStore(defaultLang);

$languageStore.on(toggleLang, (state: string, lang: string) => {
  localStorage.setItem(STORAGE_SITE_LANGUAGE_KEY, lang);

  return lang;
});
