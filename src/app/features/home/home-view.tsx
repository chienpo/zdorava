import React from 'react';
import Typing from 'react-typing-animation';
import { Trans } from '@lingui/macro';

import { HomepageGlitch } from './components/homepage-glitch';
import {PageLinkView} from "./components/page-link/page-link-view";
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

interface Props {
  bgIsToggling: boolean;
  toggleDefaultBg: (value: boolean) => void;
}

export const HomeView: React.FC<Props> = ({
  bgIsToggling,
  toggleDefaultBg
}: Props) => (
  <>
    <PageLinkView href="/about" position="left">
      <Trans>Resume</Trans>
    </PageLinkView>
    <PageLinkView href="/portfolio" position="right">
      <Trans>Portfolio</Trans>
    </PageLinkView>
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
  </>
);
