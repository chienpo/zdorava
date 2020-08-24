import styled from 'styled-components';

import { LazyImage } from '~/ui/lazy-image';

export const GlitchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;

  & > div {
    height: 100vh;

    & > div {
      width: 100vw;
      height: 100vh;
    }
  }
`;

export const LazyGlitchBackground = styled(LazyImage)`
  width: 100%;
  height: 100%;
  background-size: cover;
`;
