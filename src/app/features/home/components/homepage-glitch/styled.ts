import styled from 'styled-components';

import homepageGlitchBackground from 'assets/images/homepage-background.png';

export const GlitchContainer = styled.div`
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  & > div {
    height: 100vh;

    & > div {
      height: 100vh;
    }
  }
`;

export const GlitchBackground = styled.div`
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: url(${homepageGlitchBackground}) center center no-repeat;
  background-size: cover;
`;
