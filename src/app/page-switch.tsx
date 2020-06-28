import React, { Suspense } from 'react';
import { constants } from 'router5';
import { useRouteNode } from 'react-router5';
import { AnimatePresence } from 'framer-motion';

import {
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from 'router/routes';
import { PageLoader } from '../ui/page-loader/page-loader';
import { MotionContent } from './styled';

const HomePage = React.lazy(() => import('../core/pages/home/home-page'));
const AboutPage = React.lazy(() => import('../core/pages/about/about-page'));
const PortfolioPage = React.lazy(() =>
  import('../core/pages/portfolio/portfolio-page')
);
const ProjectPage = React.lazy(() =>
  import('../core/pages/project/project-page')
);
const NotFoundPage = React.lazy(() => import('../core/pages/not-found-page'));

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
            variants={pageVariants}
          >
            <PortfolioPage />
          </MotionContent>
        </Suspense>
      )}
      {topRouteName === ROUTE_NAME_PORTFOLIO_PROJECT && (
        <MotionContent
          key={topRouteName}
          initial="initial"
          animate="enter"
          variants={pageVariants}
        >
          <Suspense fallback={<PageLoader />}>
            <MotionContent
              key={topRouteName}
              initial="initial"
              animate="enter"
              variants={pageVariants}
            >
              <ProjectPage key={topRouteName} />
            </MotionContent>
          </Suspense>
        </MotionContent>
      )}
      {topRouteName === constants.UNKNOWN_ROUTE && (
        <MotionContent
          key={topRouteName}
          initial="initial"
          animate="enter"
          variants={pageVariants}
        >
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        </MotionContent>
      )}
    </AnimatePresence>
  );
};
