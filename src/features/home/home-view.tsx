import React from 'react';
import Typing from 'react-typing-animation';
import { Trans } from '@lingui/macro';

import { ROUTE_NAME_ABOUT, ROUTE_NAME_PORTFOLIO } from 'router/routes';
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
  toggleDefaultBg: (value: boolean) => void;
}

export const HomeView: React.FC<Props> = ({
  bgIsToggling,
  toggleDefaultBg,
}) => (
  <MotionWrap
    style={{ display: 'flex' }}
    initial="initial"
    animate="enter"
    exit="exit"
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
    <div>
      {bgIsToggling && <Image bgIsToggling={bgIsToggling} />}
      <PageLinkFadeView
        routeName={ROUTE_NAME_ABOUT}
        position="left"
        title={<Trans>About</Trans>}
      />
      <PageLinkFadeView
        routeName={ROUTE_NAME_PORTFOLIO}
        position="right"
        title={<Trans>Portfolio</Trans>}
      />
      <ThreeDBackground />
      <DottedOverlay />
    </div>
    <HomepageHGroup>
      <StyledH1>
        <Trans>Stepan</Trans>
        &nbsp;
        <Trans>Lagunovsky</Trans>
      </StyledH1>
      <Typing onFinishedTyping={() => toggleDefaultBg(true)}>
        <HomepageSubtitle>web&art pro</HomepageSubtitle>
      </Typing>
      <WebsiteSubtitle>Zdorava</WebsiteSubtitle>
    </HomepageHGroup>
  </MotionWrap>
);
