import styled from 'styled-components';

import homepageGlitchBackground from 'assets/images/backgrounds/homepage-background.webp';

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
      width: 100vw;
    }
  }
`;

export const GlitchBackground = styled.div`
  width: 100%;
  height: 100%;
  background: url(${homepageGlitchBackground}) center center no-repeat;
  background-size: cover;
`;
