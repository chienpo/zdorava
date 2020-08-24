import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import overlayBlackDot from '~/assets/images/overlay_black.png';
import overlayWhiteDot from '~/assets/images/overlay_white_four.png';
import { DARK_MODE } from '~/constants/theme';
import { BLACK_30, GRAY, RED, RED_70, WHITE } from '~/constants/colors';
import { AnimatedDiv } from '~/animations/animated';

export const LanguageSwitchBox = styled.div`
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 335px;
  list-style: none;
`;

export const BaseLinkStyled = styled(BaseLink)`
  display: block;
  padding: 0 35px;
  color: ${GRAY};
  font-size: 14px;
  line-height: 70px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  outline: none;
  transition: all ease-in-out 0.4s;

  &:focus {
    color: ${RED_70};
    font-weight: 600;
  }

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

export const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const AnimatedNavigationBox = styled(AnimatedDiv)`
  display: grid;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_30} url(${overlayBlackDot}) repeat scroll 0 -2px;`
      : `${WHITE} url(${overlayWhiteDot}) repeat scroll 0 -2px;`};
`;
