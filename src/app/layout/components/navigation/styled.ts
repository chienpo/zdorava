import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import { DARK_MODE } from 'app/constants/theme';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';

export const NavigationWrapper = styled.div`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `rgba(1, 1, 1, 0.95) url(${overlayBlackDot}) repeat scroll 0 0;`
      : `rgba(255, 255, 255, 0.90) url(${overlayWhiteDot}) repeat scroll 0 0;`};
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 170px;
  position: fixed;
  width: 100%;
`;

export const NavigationList = styled.nav`
  background: rgba(240, 240, 240, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 170px;
`;

export const NavLinkStyled = styled(BaseLink)`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: #808080;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 10px 35px;
  border-bottom: 1px solid transparent;

  ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `
      color: #808080;

        &.active {
          color: white;
          border-bottom: 1px solid white;

          &:hover {
            color: white;
            border-color: white;
          }
        }

        &:hover {
          color: red;
          border-color: red;
        }
      `
      : `
        &.active {
          color: red;
          border-bottom: 1px solid red;

          &:hover {
            color: red;
            border-color: red;
          }
        }

        &:hover {
          color: red;
          border-color: red;
        }
      `};
`;
