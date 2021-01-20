import { Route } from 'router5';

import { STORAGE_ACTIVE_PORTFOLIO_CATEGORY_KEY } from '~/store/constants';

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
  { name: ROUTE_NAME_PORTFOLIO, path: '/portfolio' },
  {
    name: ROUTE_NAME_PROJECT,
    path: '/portfolio/:id',
    children: [{ name: ROUTE_NAME_PROJECT_EDIT, path: '/edit' }],
  },
  {
    name: ROUTE_NAME_PROJECTS_ADD,
    path: '/portfolio/add-project',
    canActivate: (dispatch) => () => {
      const selectedCategory = Boolean(
        localStorage.getItem(STORAGE_ACTIVE_PORTFOLIO_CATEGORY_KEY)
      );

      if (!localStorage.getItem('userId')) {
        dispatch.navigate(
          'portfolio',
          { category: selectedCategory },
          { reload: true }
        );
        return false;
      }
      return true;
    },
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
