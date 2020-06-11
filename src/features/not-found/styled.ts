import styled from 'styled-components';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import homepageBg from 'assets/images/homepage-background.png';

import { BLACK_90, WHITE_90 } from 'constants/colors';
import { DARK_MODE } from 'constants/theme';

export const SectionNotFound = styled.section`
  background: url(${homepageBg}) center center no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Overlay = styled.figure`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_90} url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;`};

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 500px;
  color: rgba(10, 10, 10, 0.05);
  font-weight: 100;
  font-family: Orbitron-Light, sans-serif;
`;
