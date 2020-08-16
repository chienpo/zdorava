import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import { DARK_MODE } from 'constants/theme';
import { BLACK_30, GRAY, RED, RED_70, WHITE } from 'constants/colors';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white_four.png';

export const LanguageSwitchBox = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  margin-left: auto;
  align-items: center;
`;

export const NavUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 270px;
`;

export const BaseLinkStyled = styled(BaseLink)`
  display: block;
  text-decoration: none;
  color: ${GRAY};
  font-size: 14px;
  line-height: 70px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0 35px;
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
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_30} url(${overlayBlackDot}) repeat scroll 0 -2px;`
      : `${WHITE} url(${overlayWhiteDot}) repeat scroll 0 -2px;`};
  display: grid;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
