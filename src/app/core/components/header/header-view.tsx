import React from 'react';
import { I18n } from '@lingui/react';
import { languageMiddleware } from 'app/providers/language-provider';

import { LIGHT_MODE } from 'app/constants/theme';
import { Navigation } from './navigation';
import { StyledHeader } from './styled';

interface Props {
  activeRouteName: string;
  theme: string;
}

export const HeaderView: React.FC<Props> = ({ activeRouteName, theme }) => (
  <StyledHeader
    style={{
      height: theme === LIGHT_MODE ? '70px' : '50px',
    }}
  >
    <I18n>
      {({ i18n }) => (
        <Navigation
          activeRouteName={activeRouteName}
          selectedLanguage={i18n.language}
          onChangeLanguage={val => {
            return languageMiddleware.changeLanguage(val);
          }}
          theme={theme}
        />
      )}
    </I18n>
  </StyledHeader>
);
