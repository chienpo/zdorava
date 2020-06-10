import React, { Fragment, Suspense } from 'react';
import { constants } from 'router5';
import { useRouteNode } from 'react-router5';
import { AnimatePresence } from 'framer-motion';

import {
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from 'app/constants/routes';
import { NotFoundPage } from './core/pages/not-found';
import ProjectPage from './core/pages/project/project-page';
import { PageLoader } from './ui/page-loader/page-loader';
import { MotionContent } from './styled';

const HomePage = React.lazy(() => import('./core/pages/home/home-page'));
const PortfolioPage = React.lazy(() =>
  import('./core/pages/portfolio/portfolio-page')
);
const AboutPage = React.lazy(() => import('./core/pages/about/about-page'));

const pageVariants = {
  initial: {
    opacity: 0,
    height: '100%',
  },
  enter: {
    opacity: 1,
    height: '100%',
  },
  exit: {
    opacity: 0,
    height: '100%',
  },
};

export const PageSwitch = () => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {topRouteName === ROUTE_NAME_HOME && (
        <Suspense fallback={<PageLoader />}>
          <MotionContent
            key={topRouteName}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
          >
            <HomePage />
          </MotionContent>
        </Suspense>
      )}
      {topRouteName === ROUTE_NAME_ABOUT && (
        <MotionContent
          key={topRouteName}
          initial="initial"
          animate="enter"
          exit="out"
          variants={pageVariants}
        >
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        </MotionContent>
      )}
      {topRouteName === ROUTE_NAME_PORTFOLIO && (
        <Suspense fallback={<PageLoader />}>
          <MotionContent
            key={topRouteName}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
          >
            <PortfolioPage />
          </MotionContent>
        </Suspense>
      )}
      {topRouteName === ROUTE_NAME_PORTFOLIO_PROJECT && (
        <ProjectPage key={topRouteName} />
      )}
      {topRouteName === constants.UNKNOWN_ROUTE && (
        <MotionContent
          key={topRouteName}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
        >
          <Fragment key={topRouteName}>
            <NotFoundPage />
          </Fragment>
        </MotionContent>
      )}
    </AnimatePresence>
  );
};
