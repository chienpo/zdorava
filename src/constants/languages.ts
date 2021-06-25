import { t } from '@lingui/macro';

export enum Languages {
  En = 'en',
  Pl = 'pl',
  Ru = 'ru',
}

export const LANGUAGE_LABELS = {
  [Languages.En]: t`En`,
  [Languages.Pl]: t`Pl`,
  [Languages.Ru]: t`Ru`,
};
