import React from 'react';
import Typing from 'react-typing-animation';
import { Trans } from '@lingui/macro';
import Tilt from 'react-parallax-tilt';

import { ROUTE_NAME_ABOUT, ROUTE_NAME_PORTFOLIO } from 'app/constants/routes';
import { HomepageGlitch } from './components/homepage-glitch';
import { PageLinkFadeView } from './components/page-link-fade/page-link-fade-view';
import {
  HomepageContentWrapper,
  HomepageHGroup,
  HomepageTitle,
  HomepageSubtitle,
  WebsiteSubtitle,
  Name,
  SurName,
  Image,
  MotionWrap,
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
    <Tilt
      glareEnable
      glareMaxOpacity={1}
      glareColor="transparent"
      glarePosition="all"
      className="track-on-window"
      perspective={5000}
      trackOnWindow
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      scale={1.1}
      transitionSpeed={2500}
      tiltAxis="y"
      tiltReverse
    >
      <HomepageGlitch />
    </Tilt>
    <HomepageContentWrapper>
      <HomepageHGroup>
        <HomepageTitle>
          <Name>
            <Trans>Stepan</Trans>
          </Name>
          <SurName>
            <Trans>Lagunovsky</Trans>
          </SurName>
        </HomepageTitle>
        <Typing onFinishedTyping={() => toggleDefaultBg(true)}>
          <HomepageSubtitle>web&art pro</HomepageSubtitle>
        </Typing>
        <WebsiteSubtitle>Zdorava</WebsiteSubtitle>
      </HomepageHGroup>
    </HomepageContentWrapper>
  </MotionWrap>
);
