import { createElement, useState, FC } from 'react';

import { LIGHT_MODE } from 'constants/theme';
import { FooterView } from './footer-view';

interface Props {
  theme?: string;
}

export const Footer: FC<Props> = ({ theme = LIGHT_MODE }) => {
  const [contactFormOpened, toggleContactForm] = useState<boolean>(false);

  return createElement(FooterView, {
    toggleContactForm,
    contactFormOpened,
    theme,
  });
};
