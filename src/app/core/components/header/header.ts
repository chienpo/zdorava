import { createElement, FC } from 'react';
import { useRouteNode } from 'react-router5';

import { LIGHT_MODE } from 'app/constants/theme';
import { HeaderView } from './header-view';

interface Props {
  theme?: string;
}

export const Header: FC<Props> = ({ theme = LIGHT_MODE }) => {
  const { route } = useRouteNode('');
  const [ topRouteName ] = route.name.split('.');

  return createElement(HeaderView, {
    activeRouteName: topRouteName,
    theme,
  });
};
