import React from 'react';
import { I18n } from '@lingui/react';

import { languageMiddleware } from 'app/providers/language-provider';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Main } from './main';
import { AppContent, Header } from './styled';

export const Layout = () => (
  <I18n>
    {({ i18n }) => (
      <AppContent>
        <Header>
          <Navigation
            selectedLanguage={i18n.language}
            onChangeLanguage={val => languageMiddleware.changeLanguage(val)}
          />
        </Header>
        <main>
          <Main />
        </main>
        <Footer />
      </AppContent>
    )}
  </I18n>
);
