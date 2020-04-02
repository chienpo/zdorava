import React from 'react';
import GlitchEffect from 'react-glitch-effect';

import {
  HomepageContentWrapper,
  HomepageHGroup,
  HomepageTitle,
  HomepageSubtitle,
  WebsiteSubtitle,
  Name,
  SurName,
  GlitchLine,
} from './styled';

export const HomepageContent = () => (
  <HomepageContentWrapper>
    <HomepageHGroup>
      <HomepageTitle>
        <Name>Stepan</Name>
        <SurName>Lagunovsky</SurName>
      </HomepageTitle>
      <GlitchEffect duration="20s">
        <GlitchLine />
      </GlitchEffect>
      <HomepageSubtitle>FRONT-END DEVELOPER</HomepageSubtitle>
      <WebsiteSubtitle>
        Zdorava
      </WebsiteSubtitle>
    </HomepageHGroup>
  </HomepageContentWrapper>
);
