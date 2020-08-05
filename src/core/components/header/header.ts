import { createElement, FC } from 'react';
import { useRouteNode } from 'react-router5';

import { HeaderView } from './header-view';

interface Props {
  withShadow?: boolean;
  mobileByDefault?: boolean;
}

export const Header: FC<Props> = ({
  mobileByDefault = false,
  withShadow = false,
}) => {
  const { route } = useRouteNode('');
  const [topRouteName] = route.name.split('.');

  return createElement(HeaderView, {
    activeRouteName: topRouteName,
    mobileByDefault,
    withShadow,
  });
};
