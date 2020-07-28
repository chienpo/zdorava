import styled from 'styled-components';

import { LazyImage } from 'ui/lazy-image';

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

export const LazyGlitchBackground = styled(LazyImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
`;
