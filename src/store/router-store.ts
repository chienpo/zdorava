import { restore, fromObservable, Store } from 'effector';
import { Router, SubscribeState } from 'router5';

import { router } from '../router';
import { ROUTE_NAME_HOME } from '../router/routes';

const defaultState = {
  router,
  route: {
    meta: { params: {} },
    name: ROUTE_NAME_HOME,
    params: {},
    path: '/',
  },
};

export const $router = restore(fromObservable(router), defaultState) as Store<
  Router & SubscribeState
> &
  Router;

// TODO: Watch routers
// $router.watch((item: any) => console.log('params', item.route.params));
