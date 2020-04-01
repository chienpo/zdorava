import React from 'react';

import {
  HomepageContentWrapper,
  HomepageHGroup,
  HomepageTitle,
  HomepageSubtitle,
  WebsiteSubtitle,
  Name,
  SurName,
} from './styled';

export const HomepageContent = () => (
  <HomepageContentWrapper>
    <HomepageHGroup>
      <HomepageTitle>
        <Name>Stepan</Name>
        <SurName>Lagunovsky</SurName>
      </HomepageTitle>
      <HomepageSubtitle>FRONT-END DEVELOPER</HomepageSubtitle>
      <WebsiteSubtitle>
        Zdorava
      </WebsiteSubtitle>
    </HomepageHGroup>
  </HomepageContentWrapper>
);
