import { createElement, FC } from 'react';
import { useRoute, useRouteNode } from 'react-router5';
import isMobile from 'ismobilejs/dist/isMobile.min';

import { LAPTOPS } from 'app/constants/mediaDeviceMinWidths';
import { useMediaMinWidth } from 'helpers/use-media-min-width';
import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { ROUTE_NAME_HOME, routes } from '../../../constants/routes';
import { NavigationView } from './navigation-view';

export const Navigation: FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage,
}) => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  const { router } = useRoute();

  const mediaMinWidthForLaptops = useMediaMinWidth(LAPTOPS);

  const showMenu = topRouteName !== ROUTE_NAME_HOME;
  const headerHeight = topRouteName === ROUTE_NAME_HOME ? '50px' : '70px';

  // TODO Move at the final return
  return createElement(NavigationView, {
    router,
    selectedLanguage,
    onChangeLanguage,
    routes,
    isMobile: isMobile.any || !mediaMinWidthForLaptops,
    showMenu,
    headerHeight,
  });
};
