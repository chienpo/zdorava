import styled, { keyframes } from 'styled-components';

import { DARK_MODE } from 'app/constants/theme';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';

const write1 = keyframes`
  0% { stroke-dashoffset: 1200; }
  15%, 20% { stroke-dashoffset: 430; }
  25%, 35% { stroke-dashoffset: 390; }
  51%, 80% { stroke-dashoffset: 0; }
`;

const write2 = keyframes`
  0%, 55% { stroke-dashoffset: 360; }
  58%, 60% { stroke-dashoffset: 0; }
`;

const write3 = keyframes`
  0%, 65% { stroke-dashoffset: 40; }
  70% { stroke-dashoffset: 0; }
`;

export const LoaderBox = styled.div`
  width: 100%;
  height: 100%;
  background: white;

  #signature {
    left: 45%;
    top: 45%;
    position: absolute;
    width: 10%;
    padding: 2em 0;
    margin: 0 auto;
  }

  path {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-dashoffset: 0;
  }

  ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `
    background: rgba(0, 0, 0, 0.9) url(${overlayBlackDot}) repeat scroll 0 0;
    path {
      stroke: white;
    }
  `
      : `
    path {
      stroke: black;
    }
    background: rgba(255, 255, 255, 0.8) url(${overlayWhiteDot}) repeat scroll 0 0;
  `}

  .stroke-I {
    stroke-dasharray: 1200;
    animation: ${write1} 2s;
  }

  .stroke-an {
    stroke-dasharray: 360;
    animation: ${write2} 2s;
  }

  .stroke-flourish {
    stroke-dasharray: 40;
    animation: ${write3} 2s;
  }
`;
