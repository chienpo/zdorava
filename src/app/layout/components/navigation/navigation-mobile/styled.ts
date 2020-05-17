import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayBlackDotSmallSquares from 'assets/images/overlay_black_small_squares.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import { DARK_MODE } from '../../../../constants/theme';
import {
  BLACK,
  BLACK_50,
  BLACK_90,
  BLACK_LIGHTER_95,
  GRAY,
  RED,
  WHITE,
  WHITE_90,
  WHITE_SMOKE_10,
} from '../../../../constants/colors';

export const NavigationWrapper = styled.div`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_LIGHTER_95} url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;`};
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 170px;
  position: fixed;
  height: 50px;
  width: 100%;
  align-items: center;
  padding-left: 15px;
`;

export const NavigationList = styled.nav`
  background: ${WHITE_SMOKE_10};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  flex-direction: column;
  backdrop-filter: blur(3px);

  background: ${({ theme }) =>
  theme.mode === DARK_MODE
    ? `${BLACK_50}`
    : `${BLACK_90} url(${overlayBlackDotSmallSquares}) repeat scroll 0 0;`};
`;

export const NavLinkStyled = styled(BaseLink)`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: ${GRAY};
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 10px 35px;
  border-bottom: 1px solid transparent;

  ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `
      color: ${GRAY};

        &.active {
          color: ${WHITE};
          border-bottom: 1px solid ${WHITE};

          &:hover {
            color: ${WHITE};
            border-color: ${WHITE};
          }
        }

        &:hover {
          color: ${RED};
          border-color: ${RED};
        }
      `
      : `
        &.active {
          color: ${RED};
          border-bottom: 1px solid ${RED};

          &:hover {
            color: ${RED};
            border-color: ${RED};
          }
        }

        &:hover {
          color: ${RED};
          border-color: ${RED};
        }
      `};
`;

const BurgerLine = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 3px;
  display: block;
  position: absolute;
  transition: opacity 0.4s, transform 0.4s;
  background: ${({ theme }) => theme.mode === DARK_MODE ? `${WHITE} ` : `${BLACK}`};
`;

export const BurgerTopLine = styled(BurgerLine)`
  top: 5px;
`;

export const BurgerCenteredLine = styled(BurgerLine)`
  top: 13px;
`;

export const BurgerBottomLine = styled(BurgerLine)`
  top: 21px;
`;

export const BurgerButton = styled.button<{ opened?: boolean }>`
  background: transparent;
  position: relative;
  height: 30px;
  width: 40px;
  cursor: pointer;
  border: none;

  ${BurgerLine} {
    right: ${({ opened }: any) => opened ? '0' : '4px'};
  }

  ${({ opened }: any) => opened && `
    width: 30px;

    ${BurgerTopLine} {
      top: 13px;
      transform: rotate(45deg);
    }

    ${BurgerCenteredLine} {
      opacity: 0;
    }

    ${BurgerBottomLine} {
      top: 13px;
      transform: rotate(-225deg);
    }
  `}
`;
