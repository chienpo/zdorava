import * as React from 'react';

import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { LanguageSwitch } from 'app/ui/language-switch/language-switch';
import { NavigationWrapper, NavigationList, NavLinkStyled } from './styled';

type Props = {
  navLinks: any;
  theme: string;
  router: any;
};

type NavigationProps = {
  label: string;
  routeName: string;
};

export const NavigationView = ({ navLinks, theme, router, selectedLanguage, onChangeLanguage }: Props & LanguageSwitchProps) => (
  <NavigationWrapper theme={theme}>
    <NavigationList>
      {navLinks.map(({ label, routeName }: NavigationProps) => (
        <NavLinkStyled
          key={routeName}
          router={router}
          routeName={routeName}
          theme={theme}
        >
          {label}
        </NavLinkStyled>
      ))}
    </NavigationList>
    <LanguageSwitch
      selectedLanguage={selectedLanguage}
      onChangeLanguage={onChangeLanguage}
    />
  </NavigationWrapper>
);
