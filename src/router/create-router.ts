import createRouter5, { Route } from 'router5';
import browserPlugin from 'router5-plugin-browser';

export const createRouter = (routes: Route[]) => {
  const router = createRouter5(routes, {
    allowNotFound: true,
  });

  router.usePlugin(
    browserPlugin({
      useHash: false,
    })
  );

  return router;
};
