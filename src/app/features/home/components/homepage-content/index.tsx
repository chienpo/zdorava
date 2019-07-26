import React from 'react';

import {
  HomepageContentWrapper,
  HomepageHGroup,
  HomepageTitle,
  HomepageSubtitle,
} from './styled';

export const HomepageContent = () => (
  <HomepageContentWrapper>
    <HomepageHGroup>
      <HomepageTitle>
        STEF <span>LAGUNOVSKY</span>
      </HomepageTitle>

      <HomepageSubtitle>FRONT-END DEVELOPER</HomepageSubtitle>
    </HomepageHGroup>
  </HomepageContentWrapper>
);
