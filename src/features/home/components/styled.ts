import styled, { keyframes } from 'styled-components';

import { BLACK_85 } from 'constants/colors';
import overlayBlackDot from 'assets/images/overlay_black.png';
import winkingImage from 'assets/images/backgrounds/homepage-yellow-background.jpg';

export const DottedOverlay = styled.div`
  background: ${BLACK_85} url(${overlayBlackDot}) repeat scroll 0 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const LazyWinkingBannerBg = styled.div<{ bgIsToggling: boolean }>`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  animation: ${blink} 0.4s linear;
  opacity: 0;
  transition: opacity 0.4s;
  z-index: 1;

  ${({ bgIsToggling }) =>
    bgIsToggling &&
    `
    background: url(${winkingImage}) center center no-repeat;
    background-size: cover;
  `};
`;
