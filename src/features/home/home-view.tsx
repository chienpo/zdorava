import React, { Suspense } from 'react';
import { Trans } from '@lingui/react';

import {
  StyledH1,
  HomepageSubtitle,
  WebsiteSubtitle,
  SectionHome,
  MainMotionStyled,
} from './styled';

const HomepageNavigation = React.lazy(
  () => import('./components/home-page-navigation')
);

export const HomeView = () => (
  <MainMotionStyled
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{
      initial: {
        opacity: 0,
        transition: { duration: 0.4 },
      },
      enter: {
        opacity: 1,
        transition: { duration: 0.4 },
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.4 },
      },
    }}
  >
    <Suspense fallback={<nav />}>
      <HomepageNavigation />
    </Suspense>
    <SectionHome>
      <StyledH1>
        <Trans>Stepan</Trans>
        &nbsp;
        <Trans>Lagunovsky</Trans>
      </StyledH1>
      <HomepageSubtitle>web&art pro</HomepageSubtitle>
      <WebsiteSubtitle>Zdorava</WebsiteSubtitle>
    </SectionHome>
  </MainMotionStyled>
);
