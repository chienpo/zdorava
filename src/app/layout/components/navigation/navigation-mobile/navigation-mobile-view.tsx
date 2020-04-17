import * as React from 'react';
import { I18n } from '@lingui/react';
import { PoseGroup } from 'react-pose';

import { LanguageSwitchProps, LanguageSwitch } from 'app/ui/language-switch/language-switch';
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
  Overlay,
} from './styled';

type Props = {
  router: any;
  mobileMenuOpened: boolean;
  toggleBurgerMenu: (prevState: any) => void;
  preparedRoutes: any;
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
}: Props & LanguageSwitchProps) => (
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
          <Overlay>
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
          </Overlay>
          <LanguageSwitch
            selectedLanguage={selectedLanguage}
            onChangeLanguage={onChangeLanguage}
          />
        </NavigationWrapper>
      </>
      )}
  </I18n>
  );
