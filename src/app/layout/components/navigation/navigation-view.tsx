import * as React from 'react';

import {
  LanguageSwitchProps,
  LanguageSwitch,
} from 'app/ui/language-switch/language-switch';
import { BurgerMenu } from 'app/ui/burger-menu';
import { NavigationListView } from './navigation-list-view';
import { NavigationDefaultWrapper } from './styled';

interface Props extends LanguageSwitchProps {
  routes: any;
  isMobile: boolean;
  router: any;
  showMenu: boolean;
  headerHeight: string;
}

export const NavigationView: React.FC<Props> = ({
  selectedLanguage,
  onChangeLanguage,
  routes,
  isMobile,
  router,
  showMenu,
  headerHeight,
}) => (
  <NavigationDefaultWrapper style={{ height: headerHeight }}>
    {showMenu ? (
      <>
        {isMobile ? (
          <div>
            <BurgerMenu routes={routes} />
          </div>
        ) : (
          <NavigationListView router={router} routes={routes} />
        )}
      </>
    ) : (
      <div />
    )}
    <LanguageSwitch
      selectedLanguage={selectedLanguage}
      onChangeLanguage={onChangeLanguage}
    />
  </NavigationDefaultWrapper>
);
