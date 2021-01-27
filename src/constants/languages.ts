import { i18nMark } from '@lingui/react';

export enum Languages {
  En = 'en',
  Pl = 'pl',
  Ru = 'ru',
}

export const LANGUAGE_LABELS: { [key: string]: string } = {
  [Languages.En]: i18nMark('En'),
  [Languages.Pl]: i18nMark('Pl'),
  [Languages.Ru]: i18nMark('Ru'),
};
