import createRouter5 from 'router5';
import browserPlugin from 'router5-plugin-browser';

type Props = {
  routes: IRoutes
}

type RouteType = {
  name: number;
  path: string;
}

interface IRoutes {
  [key: string]: RouteType;
}

export const createRouter = (routes: any) => {
  const router = createRouter5(routes, {
    defaultRoute: 'home',
  });
  router.usePlugin(
    browserPlugin({
      useHash: false,
    }),
  );

  return router;
};
