import styled, { keyframes } from 'styled-components';

import overlayBlackDot from '~/assets/images/overlay_black.png';
import overlayWhiteDot from '~/assets/images/overlay_white_four.png';
import winkingImage from '~/assets/images/backgrounds/homepage-yellow-background.jpg';
import { BLACK_85, WHITE_85 } from '~/constants/colors';
import { DEFAULT_THEME_MODE } from '~/constants/theme';

export const DottedOverlay = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode === DEFAULT_THEME_MODE
      ? `
  ${BLACK_85} url(${overlayBlackDot}) repeat scroll 0 0
  `
      : `
  ${WHITE_85} url(${overlayWhiteDot}) repeat scroll 0 0
  `};
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const LazyWinkingBannerBg = styled.div<{ bgIsToggling: boolean }>`
  position: fixed;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  ${({ bgIsToggling }) =>
    bgIsToggling &&
    `
    background: url(${winkingImage}) center center no-repeat;
    background-size: cover;
  `};

  background-attachment: fixed;
  opacity: 0;
  transition: opacity 0.4s;
  animation: ${blink} 0.4s linear;
`;
