import { restore, fromObservable } from 'effector';
import { router } from '../router';

const defaultState = {
  router,
  route: router.getState(),
  previousRoute: null,
};

export const $storeFromRouter = restore(fromObservable(router), defaultState);

// $storeFromRouter.watch(item => console.log('params', item.route.params));
