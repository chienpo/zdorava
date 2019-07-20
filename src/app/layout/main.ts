import { createElement } from 'react';

import { useRouteNode } from 'react-router5';
import { Home } from '../features/home';
import { About } from '../features/about';
import { Portfolio } from '../features/portfolio';

export const Main: any = () => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  switch (topRouteName) {
    case 'home':
      return createElement(Home);
    case 'about':
      return createElement(About);
    case 'portfolio':
      return createElement(Portfolio);
    default:
      return null;
  }
};
