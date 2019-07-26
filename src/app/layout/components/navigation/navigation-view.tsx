import * as React from 'react';

import { LanguageSwitchProps } from 'app/ui/language-switch/language-switch';
import { LanguageSwitch } from 'app/ui/language-switch/language-switch';
import { NavigationWrapper, NavigationList, NavLinkStyled } from './styled';

type Props = {
  navLinks: any;
  router: any;
};

type NavigationProps = {
  label: string;
  routeName: string;
};

export const NavigationView = ({ navLinks, router, selectedLanguage, onChangeLanguage }: Props & LanguageSwitchProps) => (
  <NavigationWrapper>
    <NavigationList>
      {navLinks.map(({ label, routeName }: NavigationProps) => (
        <NavLinkStyled
          key={routeName}
          router={router}
          routeName={routeName}
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
