import * as React from 'react';

import {
  LanguageSwitchProps,
  LanguageSwitch,
} from 'ui/language-switch/language-switch';

import { Route } from 'models/route.model';
import { BLACK } from 'constants/colors';
import { BurgerMenu } from 'ui/burger-menu';
import { NavigationListView } from './navigation-list-view';
import { NavigationWrapper, LanguageSwitchBox } from './styled';

interface Props extends LanguageSwitchProps {
  routes: Route[];
  isMobile: boolean;
  router: any;
  showMenu: boolean;
  headerHeight: string;
  theme: string;
  withShadow: boolean;
}

export const NavigationView: React.FC<Props> = ({
  selectedLanguage,
  onChangeLanguage,
  routes,
  isMobile,
  router,
  showMenu,
  headerHeight,
  theme,
  withShadow,
}) => (
  <NavigationWrapper
    theme={theme}
    style={{
      height: headerHeight,
      boxShadow: withShadow
        ? `0px -48px 35px 45px ${BLACK}`
        : '0 -0 0 0 transparent',
    }}
  >
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
    <LanguageSwitchBox>
      <LanguageSwitch
        selectedLanguage={selectedLanguage}
        onChangeLanguage={onChangeLanguage}
      />
    </LanguageSwitchBox>
  </NavigationWrapper>
);
