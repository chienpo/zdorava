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
} from '../constants/routes';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { NotFound } from '../features/not-found';
import { PageLoader } from '../ui/page-loader/page-loader';
import { AppContent, Header, AppBackground } from './styled';
import { BLACK } from 'app/constants/colors';

const Home = React.lazy(() => import('../features/home'));
const About = React.lazy(() => import('../features/about/about'));
const Portfolio = React.lazy(() => import('../features/portfolio'));

const pageVariants = {
  initial: {
    opacity: 0,
    height: '100%',
  },
  in: {
    opacity: 1,
    height: '100%',
  },
  out: {
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
        <AppBackground>
          <AppContent>
            <Header
              style={{
                height: topRouteName === ROUTE_NAME_HOME ? '50px' : '70px',
              }}
            >
              <Navigation
                activeRouteName={topRouteName}
                selectedLanguage={i18n.language}
                onChangeLanguage={val => {
                  return languageMiddleware.changeLanguage(val);
                }}
              />
            </Header>
            <main>
              <AnimatePresence exitBeforeEnter initial={false}>
                {topRouteName === ROUTE_NAME_HOME && (
                  <motion.div
                    key={topRouteName}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Suspense fallback={<PageLoader />}>
                      <Home />
                    </Suspense>
                  </motion.div>
                )}
                {topRouteName === ROUTE_NAME_ABOUT && (
                  <motion.div
                    key={topRouteName}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Suspense fallback={<PageLoader />}>
                      <About poseKey={topRouteName} />
                    </Suspense>
                  </motion.div>
                )}
                {topRouteName === ROUTE_NAME_PORTFOLIO && (
                  <motion.div
                    key={topRouteName}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                  >
                    <Suspense fallback={<PageLoader />}>
                      <Portfolio />
                    </Suspense>
                  </motion.div>
                )}
                {topRouteName === constants.UNKNOWN_ROUTE && (
                  <motion.div
                    key={topRouteName}
                    initial="initial"
                    animate="in"
                    exit="out"
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
          </AppContent>
        </AppBackground>
      )}
    </I18n>
  );
};
