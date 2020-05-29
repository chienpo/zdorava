import * as React from 'react';
import { I18n } from '@lingui/react';

import {
  LanguageSwitchProps,
  LanguageSwitch,
} from 'app/ui/language-switch/language-switch';
import { PAGE_TITLES } from 'app/constants/page-titles';
import { NavigationWrapper, NavigationList, NavLinkStyled } from './styled';

type Props = {
  router: any;
  preparedRoutes: any;
};

type NavigationProps = {
  name: string;
};

export const NavigationView = ({
  router,
  selectedLanguage,
  onChangeLanguage,
  preparedRoutes,
}: Props & LanguageSwitchProps) => (
  <I18n>
    {({ i18n }) => (
      <NavigationWrapper>
        <NavigationList>
          {preparedRoutes.map(({ name }: NavigationProps) => (
            <NavLinkStyled key={name} router={router} routeName={name}>
              {i18n._(PAGE_TITLES[name])}
            </NavLinkStyled>
          ))}
        </NavigationList>
        <LanguageSwitch
          selectedLanguage={selectedLanguage}
          onChangeLanguage={onChangeLanguage}
        />
      </NavigationWrapper>
    )}
  </I18n>
);
