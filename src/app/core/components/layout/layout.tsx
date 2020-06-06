import React, { Fragment, Suspense } from 'react';
import { constants } from 'router5';
import { useRouteNode } from 'react-router5';
import { I18n } from '@lingui/react';
import { motion, AnimatePresence } from 'framer-motion';

import { languageMiddleware } from 'app/providers/language-provider';
import {
  ROUTE_NAME_ABOUT,
  ROUTE_NAME_HOME,
  ROUTE_NAME_PORTFOLIO,
} from '../../../constants/routes';
import { Header } from '../header';
import { Footer } from '../footer';
import { NotFound } from '../../../features/not-found';
import { PageLoader } from '../../../ui/page-loader/page-loader';

const Home = React.lazy(() => import('../../pages/home/home-page'));
const About = React.lazy(() => import('../../pages/about/about-page'));
const Portfolio = React.lazy(() =>
  import('../../pages/portfolio/portfolio-page')
);

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

export const Layout = () => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  return (
    <I18n>
      {({ i18n }) => (
        <>
          <Header
            activeRouteName={topRouteName}
            selectedLanguage={i18n.language}
            onChangeLanguage={val => {
              return languageMiddleware.changeLanguage(val);
            }}
          />
          <main>
            <AnimatePresence exitBeforeEnter initial={false}>
              {topRouteName === ROUTE_NAME_HOME && (
                <Suspense fallback={<PageLoader />}>
                  <motion.div
                    key={topRouteName}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Home />
                  </motion.div>
                </Suspense>
              )}
              {topRouteName === ROUTE_NAME_ABOUT && (
                <motion.div
                  key={topRouteName}
                  initial="initial"
                  animate="enter"
                  exit="out"
                  variants={pageVariants}
                >
                  <Suspense fallback={<PageLoader />}>
                    <About />
                  </Suspense>
                </motion.div>
              )}
              {topRouteName === ROUTE_NAME_PORTFOLIO && (
                <Suspense fallback={<PageLoader />}>
                  <motion.div
                    key={topRouteName}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={pageVariants}
                  >
                    <Portfolio />
                  </motion.div>
                </Suspense>
              )}
              {topRouteName === constants.UNKNOWN_ROUTE && (
                <motion.div
                  key={topRouteName}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={pageVariants}
                >
                  <Fragment key={topRouteName}>
                    <NotFound />
                  </Fragment>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </I18n>
  );
};
