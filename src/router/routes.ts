import { Route } from 'router5';

export const ROUTE_NAME_HOME = 'home';
export const ROUTE_NAME_ABOUT = 'about';
export const ROUTE_NAME_PORTFOLIO = 'portfolio';
export const ROUTE_NAME_PROJECTS_ADD = 'add-project';
export const ROUTE_NAME_PORTFOLIO_CATEGORY = 'category';
export const ROUTE_NAME_PROJECT = 'project';
export const ROUTE_NAME_PROJECT_EDIT = 'edit';
export const ROUTE_NAME_SIGH_IN = 'sign-in';

export const routes: Route[] = [
  { name: ROUTE_NAME_HOME, path: '/' },
  { name: ROUTE_NAME_ABOUT, path: '/about' },
  { name: ROUTE_NAME_SIGH_IN, path: '/sign-in' },
  {
    name: ROUTE_NAME_PORTFOLIO,
    path: '/portfolio',
    children: [
      { name: ROUTE_NAME_PROJECTS_ADD, path: '/add' },
      {
        name: ROUTE_NAME_PORTFOLIO_CATEGORY,
        path: '/:category',
      },
    ],
  },
  {
    name: ROUTE_NAME_PROJECT,
    path: '/portfolio/:id',
    children: [{ name: ROUTE_NAME_PROJECT_EDIT, path: '/edit' }],
  },
];

const forbiddenMenuRoutes = new Set([
  ROUTE_NAME_PORTFOLIO_CATEGORY,
  ROUTE_NAME_PROJECT,
  ROUTE_NAME_PROJECT_EDIT,
  ROUTE_NAME_SIGH_IN,
]);

export const menuRoutes = routes.filter(
  ({ name }) => !forbiddenMenuRoutes.has(name)
);
