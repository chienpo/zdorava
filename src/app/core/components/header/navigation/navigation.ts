import { createElement, FC } from 'react';
import { useRoute } from 'react-router5';
import isMobile from 'ismobilejs/dist/isMobile.min';

import { LAPTOPS } from 'constants/mediaDeviceMinWidths';
import { useMediaMinWidth } from 'helpers/use-media-min-width';
import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { ROUTE_NAME_HOME, routes } from 'constants/routes';
import { NavigationView } from './navigation-view';

interface Props extends LanguageSwitchProps {
  activeRouteName: string;
  theme: string;
  mobileByDefault: boolean;
}

export const Navigation: FC<Props> = ({
  selectedLanguage,
  onChangeLanguage,
  activeRouteName,
  theme,
  mobileByDefault,
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
    isMobile: mobileByDefault || isMobile.any || !mediaMinWidthForLaptops,
    showMenu,
    headerHeight,
    activeRouteName,
    theme,
  });
};
