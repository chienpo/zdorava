import React, { Suspense } from 'react';
import { Route, Router } from 'router5';

import { LanguageSwitchProps } from '~/ui/language-switch/language-switch-view';

import { BurgerMenu } from '~/ui/burger-menu';
import { NavigationListView } from './navigation-list-view';
import { AuthButton } from '~/features/auth/components';
import {
  NavigationWrapper,
  LanguageSwitchBox,
  AnimatedNavigationBox,
} from './styled';

const LanguageSwitch = React.lazy(() => import('~/ui/language-switch'));
const ThemeSwitch = React.lazy(() => import('~/ui/theme-switch'));

interface Props extends LanguageSwitchProps {
  routes: Route[];
  isMobile: boolean;
  router: Router;
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
  <NavigationWrapper>
    {showMenu && isMobile && <BurgerMenu routes={routes} />}
    <AnimatedNavigationBox
      style={{
        height: headerHeight,
        gridTemplateColumns: isMobile || !showMenu ? 'auto' : 'auto 335px',
      }}
      variants={{
        enter: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0,
          },
        },
      }}
    >
      {showMenu && !isMobile && (
        <nav>
          <NavigationListView router={router} routes={routes} />
        </nav>
      )}
      <LanguageSwitchBox>
        {/* TODO: Update with store */}
        <AuthButton isAuthenticated={Boolean(localStorage.getItem('token'))} />
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
    </AnimatedNavigationBox>
  </NavigationWrapper>
);
