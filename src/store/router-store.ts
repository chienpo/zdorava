import { restore, fromObservable, Store } from 'effector';
import { Router, SubscribeState } from 'router5';
import { router } from '../router';

const defaultState = {
  router,
  route: router.getState(),
  previousRoute: null,
};

export const $router = restore(fromObservable(router), defaultState) as Store<
  Router & SubscribeState
>;

// TODO: Watch routers
// $router.watch((item: any) => console.log('params', item.route.params));
