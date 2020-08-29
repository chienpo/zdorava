import React, { Suspense } from 'react';
import { Trans } from '@lingui/react';

import {
  StyledH1,
  HomepageSubtitle,
  WebsiteSubtitle,
  SectionHome,
  HomepageHGroup,
} from './styled';

const HomepageNavigation = React.lazy(
  () => import('./components/home-page-navigation')
);

export const HomeView = () => (
  <SectionHome>
    <Suspense fallback={<nav />}>
      <HomepageNavigation />
    </Suspense>
    <HomepageHGroup>
      <StyledH1>
        <Trans>Stepan</Trans>
        &nbsp;
        <Trans>Lagunovsky</Trans>
      </StyledH1>
      <HomepageSubtitle>web&art pro</HomepageSubtitle>
      <WebsiteSubtitle>Zdorava</WebsiteSubtitle>
    </HomepageHGroup>
  </SectionHome>
);
