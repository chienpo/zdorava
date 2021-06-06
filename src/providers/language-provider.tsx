import React, { useState, useEffect } from 'react';
import { I18nProvider } from '@lingui/react';
import { Catalog, Catalogs } from '@lingui/core';
import { useStore } from 'effector-react';

import { Children } from '~/lib/types';
import { $languageStore } from '~/store/language-store';

const importCatalogs: { [key: string]: Promise<Catalog> } = {
  en: import('@lingui/loader!../locales/en/messages.po'),
  ru: import('@lingui/loader!../locales/ru/messages.po'),
  pl: import('@lingui/loader!../locales/pl/messages.po'),
};

const importCatalog: (lang: string) => Promise<Catalog> = (lang) =>
  importCatalogs[lang];

export const LanguageProvider: React.FC<Children> = ({ children }) => {
  const language = useStore($languageStore);
  const [catalog, setCatalog] = useState<Catalog | null>(null);

  useEffect(() => {
    importCatalog(language).then(setCatalog);
  }, [language]);

  return (
    <I18nProvider
      language={language}
      catalogs={{ [language]: catalog } as Catalogs}
    >
      {children}
    </I18nProvider>
  );
};
