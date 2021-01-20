import React, { Suspense } from 'react';
import { Route, Router } from 'router5';

import { LanguageSelectProps } from '~/ui/select/language-select/types';
import { LanguageSelect } from '~/ui/select';
import { BurgerMenu } from '~/ui/burger-menu';
import { NavigationListView } from './navigation-list-view';
import { AuthButton } from '~/features/auth/components';
import {
  NavigationWrapper,
  LanguageSwitchBox,
  AnimatedNavigationBox,
  LanguageSelectBox,
} from './styled';

const ThemeSwitch = React.lazy(() => import('~/ui/theme-switch'));

interface Props extends LanguageSelectProps {
  routes: Route[];
  isMobile: boolean;
  router: Router;
  showMenu: boolean;
  headerHeight: string;
  themeSwitchVisible: boolean;
  isAuthenticated: boolean;
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
  isAuthenticated,
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
        <AuthButton isAuthenticated={isAuthenticated} />
        {themeSwitchVisible && (
          <Suspense fallback={<div />}>
            <ThemeSwitch disabled={!themeSwitchVisible} />
          </Suspense>
        )}
        <LanguageSelectBox>
          <Suspense fallback={<div />}>
            <LanguageSelect
              selectedLanguage={selectedLanguage}
              onToggleLanguage={onToggleLanguage}
            />
          </Suspense>
        </LanguageSelectBox>
      </LanguageSwitchBox>
    </AnimatedNavigationBox>
  </NavigationWrapper>
);
