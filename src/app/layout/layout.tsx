import React from 'react';
import { I18n } from '@lingui/react';
import Scrollbars from 'react-custom-scrollbars';

import { languageMiddleware } from 'app/providers/language-provider';
import { Navigation } from './components/navigation';
import { Main } from './main';
import { AppContent } from './styled';

export const Layout = () => (
  // TODO: Check and refactor scrollbar styled
  <Scrollbars style={{ minHeight: '100vh' }}>
    <I18n>
      {({ i18n }) => (
        <AppContent>
          <Navigation
            selectedLanguage={i18n.language}
            onChangeLanguage={val => languageMiddleware.changeLanguage(val)}
          />
          {/* TODO: Check jsx main/Main */}
          <main>
            <Main />
          </main>
        </AppContent>
      )}
    </I18n>
  </Scrollbars>
);
