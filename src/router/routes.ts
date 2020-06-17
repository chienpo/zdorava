import { Route } from 'models/route.model';

export const ROUTE_NAME_HOME = 'home';
export const ROUTE_NAME_ABOUT = 'about';
export const ROUTE_NAME_PORTFOLIO = 'portfolio';
export const ROUTE_NAME_PORTFOLIO_PROJECT = 'portfolioProject';

export const routes: Route[] = [
  { name: ROUTE_NAME_HOME, path: '/' },
  { name: ROUTE_NAME_ABOUT, path: '/about' },
  { name: ROUTE_NAME_PORTFOLIO, path: '/portfolio' },
  { name: ROUTE_NAME_PORTFOLIO_PROJECT, path: '/portfolio/project/:id' },
];
