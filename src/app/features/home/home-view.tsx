import React from 'react';
import Typing from 'react-typing-animation';
import { Trans } from '@lingui/macro';
import posed, { PoseGroup } from 'react-pose';
import Tilt from 'react-parallax-tilt';

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
} from './styled';

const Wrap = posed.div({
  enter: { opacity: 1, left: 0, position: 'relative', transition: 800 },
  exit: { opacity: 0, left: '100%', position: 'relative' },
});

interface Props {
  bgIsToggling: boolean;
  toggleDefaultBg: (value: boolean) => void;
}

export const HomeView: React.FC<Props> = ({
  bgIsToggling,
  toggleDefaultBg,
}) => (
  <PoseGroup animateOnMount flipMove={false}>
    <Wrap key="test" style={{ position: 'relative', height: '100%' }}>
      {bgIsToggling && <Image bgIsToggling={bgIsToggling} />}
      <PageLinkFadeView routeName="about" position="left">
        <Trans>Resume</Trans>
      </PageLinkFadeView>
      <PageLinkFadeView routeName="portfolio" position="right">
        <Trans>Portfolio</Trans>
      </PageLinkFadeView>
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
    </Wrap>
  </PoseGroup>
);
