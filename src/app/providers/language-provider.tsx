/* eslint-disable promise/always-return,promise/catch-or-return */
import React, { useState, useEffect } from 'react';
import { I18nProvider } from '@lingui/react';

interface Props {
  children: any;
}
// noinspection JSFileReferences
const importCatalog = async (lang: string) =>
  import(`@lingui/loader!../../locales/${lang}/messages.po`).then(({ default: catalog }) => catalog);

let languageMiddleware = {
  changeLanguage: (lang: string) => {},
  loading: false,
};

const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [catalog, setCatalog] = useState();
  const [language, setLanguage] = useState('en');

  languageMiddleware.changeLanguage = (lang: string) => setLanguage(lang);

  useEffect(() => {
    languageMiddleware.loading = false;
    importCatalog(language)
      .then(setCatalog)
      .then(() => languageMiddleware.loading = true);
  }, [catalog, language]);

  return (
    <I18nProvider language={language} catalogs={{ [language]: catalog }}>
      {children}
    </I18nProvider>
  );
};

export { LanguageProvider };
export { languageMiddleware };
