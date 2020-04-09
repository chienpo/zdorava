import { createElement, FC, useState } from 'react';
import { useRoute } from 'react-router5';
import isMobile from 'ismobilejs/dist/isMobile.min';

import { useMediaMinWidth } from 'helpers/use-media-min-width';
import { LAPTOPS } from 'app/constants/mediaDeviceMinWidths';
import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { NavigationView } from './navigation-view';
import { NavigationMobileView } from './navigation-mobile/navigation-mobile-view';

export const Navigation: FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage
}) => {
  const { router } = useRoute();
  const [mobileMenuOpened, toggleBurgerMenu] = useState(false);

  const mediaMinWidthForLaptops = useMediaMinWidth(LAPTOPS);

  if (isMobile.any || !mediaMinWidthForLaptops) {
    return createElement(NavigationMobileView, {
      router,
      selectedLanguage,
      onChangeLanguage,
      mobileMenuOpened,
      toggleBurgerMenu,
    })
  }

  return createElement(NavigationView, {
    router,
    selectedLanguage,
    onChangeLanguage,
  });
};
