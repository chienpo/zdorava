import { createElement, useState, FC } from 'react';
import { useRouteNode } from 'react-router5';

import { LIGHT_MODE } from 'constants/theme';
import { FooterView } from './footer-view';

interface Props {
  theme?: string;
}

export const Footer: FC<Props> = ({ theme = LIGHT_MODE }) => {
  const { route } = useRouteNode('');
  const [topRouteName] = route.name.split('.');

  const [contactFormOpened, toggleContactForm] = useState<boolean>(false);

  return createElement(FooterView, {
    toggleContactForm,
    contactFormOpened,
    theme,
    activeRouteName: topRouteName,
  });
};
