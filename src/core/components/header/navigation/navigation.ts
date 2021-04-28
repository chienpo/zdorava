import { createElement, FC } from 'react';
import { useRoute } from 'react-router5';
import isMobile from 'ismobilejs';
import { useStore } from 'effector-react';

import { LAPTOPS } from '~/constants/media-device-min-widths';
import { useMediaMinWidth } from '~/hooks';
import { LanguageSelectProps } from '~/ui/select/language-select/types';
import {
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
  menuRoutes,
  ROUTE_NAME_PROJECTS_ADD,
} from '~/router/routes';
import { NavigationView } from './navigation-view';

import { $authStore } from '~/store/auth-store';

interface Props extends LanguageSelectProps {
  activeRouteName: string;
  mobileByDefault: boolean;
}

export const Navigation: FC<Props> = ({
  selectedLanguage,
  onToggleLanguage,
  activeRouteName,
  mobileByDefault,
}) => {
  const { router } = useRoute();
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const mediaMinWidthForLaptops = useMediaMinWidth(LAPTOPS);
  const showMenu = activeRouteName !== ROUTE_NAME_HOME;
  const headerHeight = activeRouteName === ROUTE_NAME_HOME ? '50px' : '70px';
  const themeSwitchVisible =
    activeRouteName === ROUTE_NAME_HOME ||
    activeRouteName === ROUTE_NAME_PORTFOLIO;
  const prepareMenuRotes = !isAuthenticated
    ? menuRoutes.filter(({ name }) => name !== ROUTE_NAME_PROJECTS_ADD)
    : menuRoutes;

  return createElement(NavigationView, {
    router,
    selectedLanguage,
    onToggleLanguage,
    routes: prepareMenuRotes,
    isMobile:
      mobileByDefault ||
      isMobile(window.navigator).any ||
      !mediaMinWidthForLaptops,
    showMenu,
    headerHeight,
    themeSwitchVisible,
    isAuthenticated,
  });
};
