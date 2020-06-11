import { css, keyframes } from 'styled-components';
import { WHITE, WHITE_20 } from '../constants/colors';
import { DARK_MODE } from '../constants/theme';

const linkOverlayMirrorEffect = keyframes`
  0% {
    transform: scale3d(3.5, 3, 2) rotate3d(0, 0, 1, 135deg)
    translate3d(0px, 50%, 0px);
    visibility: hidden;
  }
  100% {
    opacity: 1;
    transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 135deg) translate3d(0px, -130%, 0px);
    visibility: initial;
  }
`;

export const mirrorEffect = css`
  overflow: hidden;

  &:before {
    background: ${({ theme }: any) =>
      theme.mode === DARK_MODE ? WHITE : WHITE_20};
    box-sizing: border-box;
    content: '';
    height: 100%;
    left: -10%;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: transform 0.8s ease 0s;
    width: 120%;
    z-index: 6;
    transition: all 0.4s;
    transition-delay: 0.8s;
    animation: ${linkOverlayMirrorEffect} 0.8s;
  }
`;
