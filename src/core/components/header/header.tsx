import React, { lazy, FC, Suspense } from 'react';
import { useRouteNode, useRoute } from 'react-router5';
import isMobileLib from 'ismobilejs';
import { useStore } from 'effector-react';

import { Props } from './types';
import { $languageStore, toggleLang } from '~/store/language-store';

import { LanguageSelect } from '~/ui/select';
import { BurgerMenu } from '~/ui/burger-menu';
import { Navigation } from './components';
import { AuthButton } from '~/features/auth/components/auth-button';
import {
  StyledHeader,
  NavigationWrapper,
  LanguageSwitchBox,
  AnimatedNavigationBox,
  LanguageSelectBox,
} from './styled';

import { $authStore } from '~/store/auth-store';

import { MinWidthResolutions } from '~/constants/media-device-min-widths';
import { useMediaMinWidth } from '~/hooks';
import {
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
  menuRoutes,
  ROUTE_NAME_PROJECTS_ADD,
} from '~/router/routes';

const ThemeSwitch = lazy(() => import('~/ui/theme-switch'));

const headerVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.5 },
  },
};

const navigationVariants = {
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

export const Header: FC<Props> = ({ mobileByDefault = false }) => {
  const { route } = useRouteNode('');
  const [topRouteName] = route.name.split('.');

  const { router } = useRoute();
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const mediaMinWidthForLaptops = useMediaMinWidth(MinWidthResolutions.LG);
  const showMenu = topRouteName !== ROUTE_NAME_HOME;
  const headerHeight = topRouteName === ROUTE_NAME_HOME ? '50px' : '70px';
  const themeSwitchVisible =
    topRouteName === ROUTE_NAME_HOME || topRouteName === ROUTE_NAME_PORTFOLIO;
  const routes = !isAuthenticated
    ? menuRoutes.filter(({ name }) => name !== ROUTE_NAME_PROJECTS_ADD)
    : menuRoutes;
  const isMobile =
    mobileByDefault ||
    isMobileLib(window.navigator).any ||
    !mediaMinWidthForLaptops;

  const language = useStore($languageStore);

  return (
    <StyledHeader
      initial="initial"
      animate="enter"
      exit="exit"
      variants={headerVariants}
    >
      <NavigationWrapper>
        {isMobile && <BurgerMenu showMenu={showMenu} routes={routes} />}
        <AnimatedNavigationBox
          style={{
            height: headerHeight,
            gridTemplateColumns: isMobile || !showMenu ? 'auto' : 'auto 335px',
          }}
          variants={navigationVariants}
        >
          {showMenu && !isMobile && (
            <Navigation router={router} routes={routes} />
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
                  selectedLanguage={language}
                  onToggleLanguage={toggleLang}
                />
              </Suspense>
            </LanguageSelectBox>
          </LanguageSwitchBox>
        </AnimatedNavigationBox>
      </NavigationWrapper>
    </StyledHeader>
  );
};
