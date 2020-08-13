import React from 'react';
import { I18n } from '@lingui/react';

import { toggleLang } from 'store/language-store';
import { Navigation } from './navigation';
import { StyledHeader } from './styled';

interface Props {
  activeRouteName: string;
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

export const HeaderView: React.FC<Props> = ({
  activeRouteName,
  mobileByDefault,
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
          onToggleLanguage={val => toggleLang(val)}
          mobileByDefault={mobileByDefault}
        />
      )}
    </I18n>
  </StyledHeader>
);
