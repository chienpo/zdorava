import { createElement, FC } from 'react';
import { useRoute } from 'react-router5';
import isMobile from 'ismobilejs/dist/isMobile.min';

import { LAPTOPS } from 'app/constants/mediaDeviceMinWidths';
import { useMediaMinWidth } from 'helpers/use-media-min-width';
import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { ROUTE_NAME_HOME, routes } from 'app/constants/routes';
import { NavigationView } from './navigation-view';

interface Props extends LanguageSwitchProps {
  activeRouteName: string;
}

export const Navigation: FC<Props> = ({
  selectedLanguage,
  onChangeLanguage,
  activeRouteName,
}) => {
  const { router } = useRoute();

  const mediaMinWidthForLaptops = useMediaMinWidth(LAPTOPS);

  const showMenu = activeRouteName !== ROUTE_NAME_HOME;
  const headerHeight = activeRouteName === ROUTE_NAME_HOME ? '50px' : '70px';

  // TODO Move at the final return
  return createElement(NavigationView, {
    router,
    selectedLanguage,
    onChangeLanguage,
    routes,
    isMobile: isMobile.any || !mediaMinWidthForLaptops,
    showMenu,
    headerHeight,
    activeRouteName,
  });
};
