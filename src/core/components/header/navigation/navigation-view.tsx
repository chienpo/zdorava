import React, { Suspense } from 'react';

import { LanguageSwitchProps } from 'ui/language-switch/language-switch';

import { Route } from 'models/route.model';

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
  themeSwitchVisible: boolean;
}

export const NavigationView: React.FC<Props> = ({
  selectedLanguage,
  onToggleLanguage,
  routes,
  isMobile,
  router,
  showMenu,
  headerHeight,
  themeSwitchVisible,
}) => (
  <NavigationWrapper
    style={{
      height: headerHeight,
      gridTemplateColumns: isMobile || !showMenu ? 'auto' : 'auto 335px',
    }}
  >
    {showMenu && (
      <>
        {isMobile ? (
          <BurgerMenu routes={routes} />
        ) : (
          <nav>
            <NavigationListView router={router} routes={routes} />
          </nav>
        )}
      </>
    )}
    <LanguageSwitchBox>
      {themeSwitchVisible && (
        <Suspense fallback={<div />}>
          <ThemeSwitch disabled={!themeSwitchVisible} />
        </Suspense>
      )}
      <Suspense fallback={<div />}>
        <LanguageSwitch
          selectedLanguage={selectedLanguage}
          onToggleLanguage={onToggleLanguage}
        />
      </Suspense>
    </LanguageSwitchBox>
  </NavigationWrapper>
);
