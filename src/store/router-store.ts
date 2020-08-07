import { restore, fromObservable } from 'effector';
import { router } from '../router';

const defaultState = {
  router,
  route: router.getState(),
  previousRoute: null,
};

export const $router = restore(fromObservable(router), defaultState);

// TODO: Watch routers
// $router.watch((item: any) => console.log('params', item.route.params));
