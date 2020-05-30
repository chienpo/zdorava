import * as React from 'react';

import {
  LanguageSwitchProps,
  LanguageSwitch,
} from 'app/ui/language-switch/language-switch';
import { BurgerMenu } from 'app/ui/burger-menu';
import { NavigationListView } from './navigation-list-view';
import { NavigationDefaultWrapper } from './styled';

interface Props extends LanguageSwitchProps {
  preparedRoutes: any;
  isMobile: boolean;
  router: any;
}

export const NavigationView: React.FC<Props> = ({
  selectedLanguage,
  onChangeLanguage,
  preparedRoutes,
  isMobile,
  router,
}) => (
  <NavigationDefaultWrapper>
    <div>
      {isMobile ? (
        <BurgerMenu routes={preparedRoutes} />
      ) : (
        <NavigationListView router={router} preparedRoutes={preparedRoutes} />
      )}
    </div>
    <LanguageSwitch
      selectedLanguage={selectedLanguage}
      onChangeLanguage={onChangeLanguage}
    />
  </NavigationDefaultWrapper>
);
