import React from 'react';
import { Trans } from '@lingui/macro';
import { motion, AnimatePresence } from 'framer-motion';

import { ROUTE_NAME_ABOUT, ROUTE_NAME_PORTFOLIO_CATEGORY } from 'router/routes';
import { PageLinkFadeView } from './components/page-link-fade/page-link-fade-view';
import { ThreeDBackground } from './components/ThreeDBackground';
import {
  StyledH1,
  HomepageSubtitle,
  WebsiteSubtitle,
  Image,
  MotionWrap,
  DottedOverlay,
  HomepageHGroup,
} from './styled';

interface Props {
  bgIsToggling: boolean;
  portfolioSelectedCategory: string;
}

export const HomeView: React.FC<Props> = ({
  bgIsToggling,
  portfolioSelectedCategory,
}) => (
  <motion.section
    animate="enter"
    exit="exit"
    style={{ position: 'relative', height: '100%' }}
  >
    <AnimatePresence>
      <MotionWrap
        style={{ display: 'flex' }}
        initial="initial"
        variants={{
          initial: {
            opacity: 0,
            x: '-100%',
          },
          enter: {
            opacity: 1,
            x: '0%',
            transition: { duration: 1 },
          },
          exit: {
            opacity: 0,
            x: '-100%',
            transition: { duration: 1.5 },
          },
        }}
      >
        <nav>
          {bgIsToggling && <Image bgIsToggling={bgIsToggling} />}
          <PageLinkFadeView
            routeName={ROUTE_NAME_ABOUT}
            position="left"
            title={<Trans>About</Trans>}
          />
          <PageLinkFadeView
            routeName={ROUTE_NAME_PORTFOLIO_CATEGORY}
            position="right"
            title={<Trans>Portfolio</Trans>}
            routeParams={{ category: portfolioSelectedCategory }}
          />
          <ThreeDBackground />
          <DottedOverlay />
        </nav>
        <HomepageHGroup>
          <StyledH1>
            <Trans>Stepan</Trans>
            &nbsp;
            <Trans>Lagunovsky</Trans>
          </StyledH1>
          <HomepageSubtitle>web&art pro</HomepageSubtitle>
          <WebsiteSubtitle>Zdorava</WebsiteSubtitle>
        </HomepageHGroup>
      </MotionWrap>
    </AnimatePresence>
  </motion.section>
);
