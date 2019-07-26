import { createElement } from 'react';
import { useRoute } from 'react-router5';
import { NavigationView } from './navigation-view';

import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';

export const Navigation: React.FC<LanguageSwitchProps> = ({ selectedLanguage, onChangeLanguage }) => {
  const navLinks = [
    {
      label: 'Main',
      routeName: 'home',
    },
    {
      label: 'About',
      routeName: 'about',
    },
    {
      label: 'Portfolio',
      routeName: 'portfolio',
    },
  ];

  const { router } = useRoute();

  return createElement(NavigationView, { router, navLinks, selectedLanguage, onChangeLanguage, });
};
