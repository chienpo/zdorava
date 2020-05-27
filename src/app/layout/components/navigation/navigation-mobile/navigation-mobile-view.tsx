import * as React from 'react';
import { I18n } from '@lingui/react';
import { PoseGroup } from 'react-pose';

import { LanguageSwitch } from 'app/ui/language-switch/language-switch';
import { PAGE_TITLES } from 'app/constants/page-titles';
import { FadeInOut } from '../../../../animations/fade-in-out-vertically';
import {
  NavigationWrapper,
  NavigationList,
  NavLinkStyled,
  BurgerButton,
  BurgerTopLine,
  BurgerCenteredLine,
  BurgerBottomLine,
} from './styled';

type Props = {
  router: any;
  mobileMenuOpened: boolean;
  toggleBurgerMenu: (prevState: any) => void;
  preparedRoutes: any;
  selectedLanguage: string;
  onChangeLanguage: (lang: string) => void;
};

type NavigationProps = {
  name: string;
};

export const NavigationMobileView = ({
  router,
  selectedLanguage,
  onChangeLanguage,
  mobileMenuOpened,
  toggleBurgerMenu,
  preparedRoutes,
}: Props) => (
  <I18n>
    {({ i18n }) => (
      <>
        <PoseGroup>
          {mobileMenuOpened && (
            <FadeInOut key="fadeInOut">
              <NavigationList>
                {preparedRoutes.map(({ name }: NavigationProps) => (
                  <NavLinkStyled
                    key={name}
                    router={router}
                    routeName={name}
                    onClick={() => {
                      return toggleBurgerMenu((prevState: boolean) => !prevState)
                    }}
                  >
                    {i18n._(PAGE_TITLES[name])}
                  </NavLinkStyled>
                ))}
              </NavigationList>
            </FadeInOut>
          )}
        </PoseGroup>
        <NavigationWrapper>
          <BurgerButton
            opened={mobileMenuOpened}
            type="button"
            onClick={() => {
              return toggleBurgerMenu((prevState: boolean) => !prevState)
            }}
          >
            <BurgerTopLine />
            <BurgerCenteredLine />
            <BurgerBottomLine />
          </BurgerButton>
          <LanguageSwitch
            selectedLanguage={selectedLanguage}
            onChangeLanguage={onChangeLanguage}
          />
        </NavigationWrapper>
      </>
      )}
  </I18n>
  );
