import { createElement, FC } from 'react';
import { useRoute } from 'react-router5';
import isMobile from 'ismobilejs/dist/isMobile.min';

import { LAPTOPS } from '~/constants/mediaDeviceMinWidths';
import { useMediaMinWidth } from '~/hooks/use-media-min-width';
import { LanguageSwitchProps } from '~/ui/language-switch/language-switch';
import {
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
  ROUTE_NAME_PORTFOLIO_CATEGORY,
  routes,
} from '~/router/routes';
import { NavigationView } from './navigation-view';

interface Props extends LanguageSwitchProps {
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

  const mediaMinWidthForLaptops = useMediaMinWidth(LAPTOPS);
  const showMenu = activeRouteName !== ROUTE_NAME_HOME;
  const headerHeight = activeRouteName === ROUTE_NAME_HOME ? '50px' : '70px';
  const themeSwitchVisible =
    activeRouteName === ROUTE_NAME_HOME ||
    activeRouteName === ROUTE_NAME_PORTFOLIO ||
    activeRouteName === ROUTE_NAME_PORTFOLIO_CATEGORY;

  // TODO Move at the final return
  return createElement(NavigationView, {
    router,
    selectedLanguage,
    onToggleLanguage,
    routes,
    isMobile: mobileByDefault || isMobile.any || !mediaMinWidthForLaptops,
    showMenu,
    headerHeight,
    themeSwitchVisible,
  });
};
