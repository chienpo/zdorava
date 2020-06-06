import { createElement } from 'react';
import { useRouteNode } from 'react-router5';

import { HeaderView } from './header-view';

export const Header: React.FC = () => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  return createElement(HeaderView, {
    activeRouteName: topRouteName,
  });
};
