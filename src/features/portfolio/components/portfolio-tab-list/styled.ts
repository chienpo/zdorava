import styled from 'styled-components';

import overlayBlackDot from '~/assets/images/overlay_black.png';
import overlayWhiteDot from '~/assets/images/overlay_white_four.png';
import { ThemeModes } from '~/constants/theme';
import {
  BLACK_0,
  BLACK_100,
  BLACK_89,
  WHITE,
  WHITE_0,
  WHITE_100,
} from '~/constants/colors';
import { AnimatedDiv } from '~/animations/animated';

export const PortfolioTabsBox = styled(AnimatedDiv)`
  position: fixed;
  top: 70px;
  z-index: 2;
  width: 100%;
  height: 103px;
`;

export const MotionPortfolioTabUl = styled.ul`
  @media screen and (min-width: 400px) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    column-gap: 30px;
  }

  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 15px;
  list-style: none;

  &::after {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.mode === ThemeModes.Dark ? BLACK_89 : WHITE};
    content: '';
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    ${({ theme }) =>
      theme.mode === ThemeModes.Dark
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
