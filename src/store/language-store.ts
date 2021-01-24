import { createStore, createEvent, Event } from 'effector';

import { Languages } from '~/constants/languages';
import { STORAGE_SITE_LANGUAGE_KEY } from '~/store/constants';

export const toggleLang: Event<string> = createEvent();

export const defaultLang =
  localStorage.getItem(STORAGE_SITE_LANGUAGE_KEY) || Languages.Pl;

export const $languageStore = createStore(defaultLang);

$languageStore.on(toggleLang, (state: string, lang: string) => {
  localStorage.setItem(STORAGE_SITE_LANGUAGE_KEY, lang);

  return lang;
});
