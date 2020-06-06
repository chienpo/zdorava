import { createElement } from 'react';

import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { HeaderView } from './header-view';

interface Props extends LanguageSwitchProps {
  activeRouteName: string;
}

export const Header: React.FC<Props> = ({
  activeRouteName,
  selectedLanguage,
  onChangeLanguage,
}) => {
  return createElement(HeaderView, {
    activeRouteName,
    selectedLanguage,
    onChangeLanguage,
  });
};
