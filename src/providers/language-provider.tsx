/* eslint-disable promise/always-return,promise/catch-or-return */
import React, { useState, useEffect, ReactNode } from 'react';
import { I18nProvider } from '@lingui/react';
import { useStore } from 'effector-react';

import { $languageStore } from 'store/language-store';

interface Props {
  children: ReactNode;
}

// noinspection JSFileReferences
const importCatalog = async (lang: string) =>
  import(`@lingui/loader!../locales/${lang}/messages.po`).then(
    ({ default: catalog }) => catalog
  );

const languageMiddleware = {
  loading: false,
};

const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [catalog, setCatalog] = useState();
  const language = useStore($languageStore);

  useEffect(() => {
    languageMiddleware.loading = false;
    importCatalog(language)
      .then(setCatalog)
      .then(() => {
        languageMiddleware.loading = true;
      });
  }, [catalog, language]);

  return (
    <I18nProvider language={language} catalogs={{ [language]: catalog }}>
      {children}
    </I18nProvider>
  );
};

export { LanguageProvider };
