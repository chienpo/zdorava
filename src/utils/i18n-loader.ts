import { i18n, Messages } from '@lingui/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { en, ru, pl } from 'make-plural/plurals';
import * as env from '~/env';

type MessagesResponse = { messages: Messages };

i18n.loadLocaleData({
  en: { plurals: en },
  ru: { plurals: ru },
  pl: { plurals: pl },
});

export const dynamicActivate = async (locale: string) => {
  const importCatalogs: { [key: string]: Promise<MessagesResponse> } = {
    en: import(`@lingui/loader!../locales/en/messages.po`),
    ru: import('@lingui/loader!../locales/ru/messages.po'),
    pl: import('@lingui/loader!../locales/pl/messages.po'),
  };

  const { messages } = await importCatalogs[locale];

  i18n.load(locale, messages);
  i18n.activate(locale);
  i18n.on('missing', ({ locale: missingLocale, id }) => {
    if (env.ENVIRONMENT === 'DEV') {
      // eslint-disable-next-line no-console
      console.warn(`Translation in ${missingLocale} for ${id} is missing!`);
    }
  });
};
