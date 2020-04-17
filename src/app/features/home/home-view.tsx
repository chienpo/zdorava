import React from 'react';
import Typing from 'react-typing-animation';
import { Trans } from '@lingui/macro';

import { HomepageGlitch } from './components/homepage-glitch';
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
  LeftNav,
  RightNav,
  LinkInner,
  LinkOverlay,
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
    <HomepageContentWrapper>
      <LeftNav>
        <LinkOverlay />
        <LinkInner>
          <Trans>About me</Trans>
        </LinkInner>
      </LeftNav>
      <RightNav>
        <LinkOverlay />
        <LinkInner>
          <Trans>Portfolio</Trans>
        </LinkInner>
      </RightNav>
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
