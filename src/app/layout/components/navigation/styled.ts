import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import { DARK_MODE } from '../../../constants/theme';
import { BLACK_LIGHTER_95, GRAY, RED, WHITE, WHITE_90, WHITE_SMOKE_10 } from '../../../constants/colors';

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
`;

export const NavigationList = styled.nav`
  background: ${WHITE_SMOKE_10};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 170px;
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
