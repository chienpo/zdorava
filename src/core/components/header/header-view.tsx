import React from 'react';
import { I18n } from '@lingui/react';
import { languageMiddleware } from 'providers/language-provider';

import { toggleLang } from 'store/language-store';
import { ROUTE_NAME_HOME } from 'constants/routes';
import { Navigation } from './navigation';
import { StyledHeader } from './styled';

interface Props {
  activeRouteName: string;
  theme: string;
  mobileByDefault: boolean;
}

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.5 },
  },
};

const homePageVariants = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  enter: {
    opacity: 1,
    x: '0%',
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: { duration: 1.5 },
  },
};

export const HeaderView: React.FC<Props> = ({
  activeRouteName,
  theme,
  mobileByDefault,
}) => (
  <StyledHeader
    initial="initial"
    animate="enter"
    exit="exit"
    variants={activeRouteName === ROUTE_NAME_HOME ? homePageVariants : variants}
  >
    <I18n>
      {({ i18n }) => (
        <Navigation
          activeRouteName={activeRouteName}
          selectedLanguage={i18n.language}
          onChangeLanguage={val => {
            toggleLang(val);

            return languageMiddleware.changeLanguage(val);
          }}
          theme={theme}
          mobileByDefault={mobileByDefault}
        />
      )}
    </I18n>
  </StyledHeader>
);
