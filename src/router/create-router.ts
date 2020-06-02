import createRouter5 from 'router5';
import browserPlugin from 'router5-plugin-browser';

interface RouteType {
  name: string;
  path: string;
  title: string;
}

export const createRouter = (routes: RouteType[]) => {
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
