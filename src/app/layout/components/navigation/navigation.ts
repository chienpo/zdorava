import { createElement } from 'react';
import { useRoute } from 'react-router5';

import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { NavigationView } from './navigation-view';

export const Navigation: React.FC<LanguageSwitchProps> = ({
  selectedLanguage,
  onChangeLanguage
}) => {

  const { router } = useRoute();

  return createElement(NavigationView, {
    router,
    selectedLanguage,
    onChangeLanguage,
  });
};
