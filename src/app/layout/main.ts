import { createElement } from 'react';
import { useRouteNode } from 'react-router5';
import { constants } from 'router5';

import { ROUTE_NAME_ABOUT, ROUTE_NAME_HOME, ROUTE_NAME_PORTFOLIO } from '../constants/routes';
import { Home } from '../features/home';
import { About } from '../features/about';
import { Portfolio } from '../features/portfolio';
import { NotFound } from '../features/not-found';

export const Main: any = () => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  switch (topRouteName) {
    case ROUTE_NAME_HOME:
      return createElement(Home);
    case ROUTE_NAME_ABOUT:
      return createElement(About);
    case ROUTE_NAME_PORTFOLIO:
      return createElement(Portfolio);
    case constants.UNKNOWN_ROUTE:
      return createElement(NotFound);
    default:
      return null;
  }
};
