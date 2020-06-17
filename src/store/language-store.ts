import { createStore, createEvent, Event } from 'effector';

export const toggleLang: Event<string> = createEvent();

export const $languageStore = createStore('en');

$languageStore.on(toggleLang, (state: string, lang: string) => lang);
