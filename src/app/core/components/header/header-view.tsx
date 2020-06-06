import * as React from 'react';

import { ROUTE_NAME_HOME } from 'app/constants/routes';
import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { Navigation } from './navigation';

interface Props extends LanguageSwitchProps {
  activeRouteName: string;
}

export const HeaderView: React.FC<Props> = ({
  activeRouteName,
  selectedLanguage,
  onChangeLanguage,
}) => (
  <header
    style={{
      height: activeRouteName === ROUTE_NAME_HOME ? '50px' : '70px',
      zIndex: 5,
    }}
  >
    <Navigation
      activeRouteName={activeRouteName}
      selectedLanguage={selectedLanguage}
      onChangeLanguage={onChangeLanguage}
    />
  </header>
);
