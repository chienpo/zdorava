import styled from 'styled-components';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import homepageBg from 'assets/images/backgrounds/homepage-background.webp';

import { BLACK, BLACK_90, WHITE_90 } from 'constants/colors';
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

  @media screen and (min-width: 991px) {
    font-size: 400px;
  }

  @media screen and (min-width: 481px) {
    font-size: 240px;
  }

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  color: ${BLACK};
  font-weight: 100;
  font-family: MontserratThin;
`;
