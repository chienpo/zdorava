import React from 'react';
import { I18n } from '@lingui/react';
import { languageMiddleware } from 'app/providers/language-provider';

import { ROUTE_NAME_HOME } from 'app/constants/routes';
import { Navigation } from './navigation';
import { StyledHeader } from './styled';

interface Props {
  activeRouteName: string;
}

export const HeaderView: React.FC<Props> = ({ activeRouteName }) => (
  <StyledHeader
    style={{
      height: activeRouteName === ROUTE_NAME_HOME ? '50px' : '70px',
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
        />
      )}
    </I18n>
  </StyledHeader>
);
