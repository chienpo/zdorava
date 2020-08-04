import React from 'react';
import { I18n } from '@lingui/react';

import { toggleLang } from 'store/language-store';
import { Navigation } from './navigation';
import { StyledHeader } from './styled';

interface Props {
  activeRouteName: string;
  theme: string;
  mobileByDefault: boolean;
  withShadow: boolean;
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

export const HeaderView: React.FC<Props> = ({
  activeRouteName,
  theme,
  mobileByDefault,
  withShadow,
}) => (
  <StyledHeader
    initial="initial"
    animate="enter"
    exit="exit"
    variants={variants}
  >
    <I18n>
      {({ i18n }) => (
        <Navigation
          activeRouteName={activeRouteName}
          selectedLanguage={i18n.language}
          onChangeLanguage={val => toggleLang(val)}
          theme={theme}
          mobileByDefault={mobileByDefault}
          withShadow={withShadow}
        />
      )}
    </I18n>
  </StyledHeader>
);
