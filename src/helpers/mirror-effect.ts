import { css, keyframes } from 'styled-components';

import { BLACK_20, WHITE_20 } from '~/constants/colors';
import { DARK_MODE } from '~/constants/theme';

const linkOverlayMirrorEffect = keyframes`
  0% {
    transform: scale3d(3.5, 3, 2) rotate3d(0, 0, 1, 135deg)
    translate3d(0, 50%, 0);
    visibility: hidden;
  }
  100% {
    transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 135deg) translate3d(0, -130%, 0);
    visibility: initial;
    opacity: 1;
  }
`;

export const mirrorEffect = css`
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: -10%;
    z-index: 6;
    box-sizing: border-box;
    width: 120%;
    height: 100%;
    background: ${({ theme }) =>
      theme.mode === DARK_MODE ? WHITE_20 : BLACK_20};
    opacity: 0;
    transition: transform 2s, visibility 2s, opacity 2s;
    animation: ${linkOverlayMirrorEffect} 0.8s;
    content: '';
  }
`;
