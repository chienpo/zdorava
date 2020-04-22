import React from 'react';
import Typing from 'react-typing-animation';
import { Trans } from '@lingui/macro';
import posed from 'react-pose';

import { HomepageGlitch } from './components/homepage-glitch';
import {PageLinkFadeView} from "./components/page-link-fade/page-link-fade-view";
import {
  HomepageContentWrapper,
  HomepageHGroup,
  HomepageTitle,
  HomepageSubtitle,
  WebsiteSubtitle,
  Name,
  SurName,
  Image,
  Divider,
} from './styled';

const Container = posed.div({
  enter: { applyAtStart: { height: '100%' } }
});

const Wrap = posed.div({
  enter: { opacity: 1, applyAtStart: { height: '100%' } },
  exit: { opacity: 0 }
});

interface Props {
  bgIsToggling: boolean;
  toggleDefaultBg: (value: boolean) => void;
}

export const HomeView: React.FC<Props> = ({
  bgIsToggling,
  toggleDefaultBg,
}: Props) => (
  <Container>
    <Wrap style={{ position: 'relative' }}>
      <PageLinkFadeView routeName="about" position="left">
        <Trans>Resume</Trans>
      </PageLinkFadeView>
      <PageLinkFadeView routeName="portfolio" position="right">
        <Trans>Portfolio</Trans>
      </PageLinkFadeView>
      <HomepageContentWrapper>
        <HomepageHGroup>
          <Divider />
          <HomepageTitle>
            <Name>
              <Trans>Stepan</Trans>
            </Name>
            <SurName>
              <Trans>Lagunovsky</Trans>
            </SurName>
          </HomepageTitle>
          <Divider />
          <Typing onFinishedTyping={() => toggleDefaultBg(true)}>
            <HomepageSubtitle>web&art pro</HomepageSubtitle>
          </Typing>
          <WebsiteSubtitle>
            Zdorava
          </WebsiteSubtitle>
        </HomepageHGroup>
      </HomepageContentWrapper>
      {bgIsToggling && (
        <Image bgIsToggling={bgIsToggling} />
      )}
      <HomepageGlitch />
    </Wrap>
  </Container>
);
