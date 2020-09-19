import React, { Suspense } from 'react';
import { constants } from 'router5';
import { useRouteNode } from 'react-router5';
import { AnimatePresence } from 'framer-motion';

import {
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from '~/router/routes';
import { PageLoader } from '~/ui/page-loader/page-loader';
import { AppBox, MotionContent } from './styled';

const HomePage = React.lazy(() => import('~/features/home'));
const AboutPage = React.lazy(() => import('~/features/about'));
const PortfolioPage = React.lazy(() => import('~/features/portfolio'));
const ProjectPage = React.lazy(() => import('~/features/single-project'));
const NotFoundPage = React.lazy(() => import('~/features/not-found'));

const pageVariants = {
  initial: {
    opacity: 0,
    height: '100%',
  },
  enter: {
    opacity: 1,
    height: '0%',
  },
  exit: {
    opacity: 0,
    height: '100%',
  },
};

export const Root = () => {
  const { route } = useRouteNode('');
  const topRouteName = !route.name ? ROUTE_NAME_HOME : route.name.split('.')[0];

  return (
    <AppBox>
      <AnimatePresence exitBeforeEnter initial={false}>
        {topRouteName === ROUTE_NAME_HOME && (
          <MotionContent
            key={topRouteName}
            initial="initial"
            animate="enter"
            variants={pageVariants}
          >
            <Suspense fallback={<PageLoader showSpinner={true} />}>
              <HomePage />
            </Suspense>
          </MotionContent>
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
          <MotionContent
            key={topRouteName}
            initial="initial"
            animate="enter"
            variants={pageVariants}
          >
            <Suspense fallback={<PageLoader />}>
              <PortfolioPage />
            </Suspense>
          </MotionContent>
        )}
        {topRouteName === ROUTE_NAME_PORTFOLIO_PROJECT && (
          <MotionContent
            key={topRouteName}
            initial="initial"
            animate="enter"
            variants={pageVariants}
          >
            <Suspense fallback={<PageLoader />}>
              <ProjectPage key={topRouteName} />
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
    </AppBox>
  );
};
