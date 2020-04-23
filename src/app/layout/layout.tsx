import React, { Fragment, Suspense } from 'react';
import { constants } from "router5";
import { useRouteNode } from 'react-router5';
import { I18n } from '@lingui/react';
import posed, { PoseGroup } from 'react-pose';

import { languageMiddleware } from 'app/providers/language-provider';
import {ROUTE_NAME_ABOUT, ROUTE_NAME_HOME, ROUTE_NAME_PORTFOLIO} from '../constants/routes';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { NotFound } from '../features/not-found';
import { PageLoader } from '../ui/page-loader/page-loader';
import { AppContent, Header, AppBackground } from './styled';

const Home = React.lazy(() => import('../features/home'));
const About = React.lazy(() => import('../features/about/about'));
const Portfolio = React.lazy(() => import('../features/portfolio'));

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
});

export const Layout = () => {
  const { route } = useRouteNode('');
  const topRouteName = route.name.split('.')[0];

  return (
    <I18n>
      {({ i18n }) => (
        <AppBackground>
          <PoseGroup>
            <RouteContainer key={topRouteName}>
              <AppContent>
                <Header>
                  <Navigation
                    selectedLanguage={i18n.language}
                    onChangeLanguage={val => {
                      return languageMiddleware.changeLanguage(val);
                    }}
                  />
                </Header>
                <main>
                  {topRouteName === ROUTE_NAME_HOME && (
                    <Suspense fallback={PageLoader}>
                      <Home />
                    </Suspense>
                  )}
                  {topRouteName === ROUTE_NAME_ABOUT && (
                    <Suspense fallback={PageLoader}>
                      <About poseKey={topRouteName} />
                    </Suspense>
                  )}
                  {topRouteName === ROUTE_NAME_PORTFOLIO && (
                    <Suspense fallback={PageLoader}>
                      <Portfolio />
                    </Suspense>
                  )}
                  {topRouteName === constants.UNKNOWN_ROUTE && (
                    <Fragment key={topRouteName}>
                      <NotFound />
                    </Fragment>
                  )}
                </main>
                <Footer />
              </AppContent>
            </RouteContainer>
          </PoseGroup>
        </AppBackground>
      )}
    </I18n>
  );
}
