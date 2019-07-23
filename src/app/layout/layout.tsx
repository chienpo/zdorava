import React from 'react';
import { I18n } from '@lingui/react';
import { languageMiddleware } from 'app/providers/language-provider';
import { Navigation } from './components/navigation';
import { Main } from './main';

import { AppContent } from './styled';

export const Layout = () => (
  <I18n>
    {({ i18n }) => (
      <AppContent>
        <Navigation theme="dark" selectedLanguage={i18n.language} onChangeLanguage={val => languageMiddleware.changeLanguage(val)} />
        <main>
          <Main />
        </main>
      </AppContent>
    )}
  </I18n>
);
