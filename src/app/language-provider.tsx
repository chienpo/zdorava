/* eslint-disable promise/always-return,promise/catch-or-return */
import React, { useState, useEffect } from 'react';
import { I18nProvider } from '@lingui/react';

interface Props {
  children: any;
  language: string;
}
// noinspection JSFileReferences
const importCatalog = async (lang: string) =>
  import(`@lingui/loader!../locales/${lang}/messages.po`).then(({ default: catalog }) => catalog);

export const LanguageProvider: React.FC<Props> = ({ children, language }) => {
  const [catalog, setCatalog] = useState({
    messages: {},
  });

  useEffect(() => {
    importCatalog(language).then(setCatalog);
  }, [catalog, language]);

  return (
    <I18nProvider language={language} catalogs={{ [language]: catalog }}>
      {children}
    </I18nProvider>
  );
};
