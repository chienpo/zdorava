import styled from 'styled-components';

import { DARK_MODE } from 'constants/theme';
import {
  BLACK_0,
  BLACK_100,
  BLACK_89,
  WHITE,
  WHITE_0,
  WHITE_100,
} from 'constants/colors';
import { AnimatedDiv } from 'animations/animated';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white_four.png';

export const PortfolioTabsBox = styled(AnimatedDiv)`
  position: fixed;
  z-index: 2;
  top: 70px;
  width: 100%;
  height: 103px;
`;

export const MotionPortfolioTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 30px;
  justify-content: center;
  position: relative;
  top: 0;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 100%;
    height: 100%;
    background: ${({ theme }) => (theme.mode === DARK_MODE ? BLACK_89 : WHITE)};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ theme }) =>
      theme.mode === DARK_MODE
        ? `
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(${BLACK_100}),
    to(${BLACK_0})
  );
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.895) 100%
    ),
    url(${overlayBlackDot}) repeat scroll 0 0;
  `
        : `
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(${WHITE_100}),
    to(${WHITE_0})
  );
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.895) 100%
    ),
    url(${overlayWhiteDot}) repeat scroll 0 0;
  `};
  }
`;
