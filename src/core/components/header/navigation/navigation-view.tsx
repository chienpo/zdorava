import React, { Suspense } from 'react';

import { LanguageSwitchProps } from 'ui/language-switch/language-switch';

import { Route } from 'models/route.model';

import { BLACK } from 'constants/colors';
import { BurgerMenu } from 'ui/burger-menu';
import { NavigationListView } from './navigation-list-view';
import { NavigationWrapper, LanguageSwitchBox } from './styled';

const LanguageSwitch = React.lazy(() => import('ui/language-switch'));
const ThemeSwitch = React.lazy(() => import('ui/theme-switch'));

interface Props extends LanguageSwitchProps {
  routes: Route[];
  isMobile: boolean;
  router: any;
  showMenu: boolean;
  headerHeight: string;
  withShadow: boolean;
  disableThemeSwitch: boolean;
}

export const NavigationView: React.FC<Props> = ({
  selectedLanguage,
  onChangeLanguage,
  routes,
  isMobile,
  router,
  showMenu,
  headerHeight,
  withShadow,
  disableThemeSwitch,
}) => (
  <NavigationWrapper
    style={{
      height: headerHeight,
      boxShadow: withShadow
        ? `0px -48px 35px 45px ${BLACK}`
        : '0 -0 0 0 transparent',
      gridTemplateColumns: isMobile || !showMenu ? 'auto' : 'auto 335px',
    }}
  >
    {showMenu && (
      <>
        {isMobile ? (
          <BurgerMenu routes={routes} />
        ) : (
          <NavigationListView router={router} routes={routes} />
        )}
      </>
    )}
    <LanguageSwitchBox>
      <Suspense fallback={<div />}>
        <ThemeSwitch disabled={disableThemeSwitch} />
      </Suspense>
      <Suspense fallback={<div />}>
        <LanguageSwitch
          selectedLanguage={selectedLanguage}
          onChangeLanguage={onChangeLanguage}
        />
      </Suspense>
    </LanguageSwitchBox>
  </NavigationWrapper>
);
