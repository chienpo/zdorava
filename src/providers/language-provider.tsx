import React, { useState, useEffect, ReactNode } from 'react';
import { I18nProvider } from '@lingui/react';
import { Catalog, Catalogs } from '@lingui/core';
import { useStore } from 'effector-react';

import { $languageStore } from 'store/language-store';

interface Props {
  children: ReactNode;
}

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const importCatalog = async (lang: string) =>
    import(`@lingui/loader!../locales/${lang}/messages.po`).then(
      ({ default: defaultCatalog }) => defaultCatalog
    );

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
