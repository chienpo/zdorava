import React, { ChangeEvent, FC } from 'react';
import { OptionTypeBase } from 'react-select';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { StyledLink, LinkBoxAnimated } from './styled';

export interface LanguageSwitchProps {
  selectedLanguage: string;
  onChange?: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  onToggleLanguage?: (lang: string) => void;
  options: OptionTypeBase;
}

interface Props {
  routeName: string;
}

export const LinkAdd: FC<Props> = ({ routeName }) => (
  <LinkBoxAnimated
    whileTap={{ scale: 1.2 }}
    variants={{
      enter: {
        scale: 1,
        transition: { duration: 0.4 },
      },
      exit: {
        scale: 0,
        transition: { duration: 0.4 },
      },
    }}
    initial="exit"
    animate="enter"
    exit="exit"
  >
    <StyledLink routeName={routeName}>
      <FontAwesomeIcon icon={faEdit} size="3x" />
    </StyledLink>
  </LinkBoxAnimated>
);
