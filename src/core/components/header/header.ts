import { createElement, FC } from 'react';
import { useRouteNode } from 'react-router5';

import { LIGHT_MODE } from 'constants/theme';
import { HeaderView } from './header-view';

interface Props {
  theme?: string;
  mobileByDefault?: boolean;
}

export const Header: FC<Props> = ({
  theme = LIGHT_MODE,
  mobileByDefault = false,
}) => {
  const { route } = useRouteNode('');
  const [topRouteName] = route.name.split('.');

  return createElement(HeaderView, {
    activeRouteName: topRouteName,
    theme,
    mobileByDefault,
  });
};
