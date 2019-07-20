import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import overlayBlackDot from './overlay_black.png';
import overlayWhiteDot from './overlay_white.png';

export const NavigationWrapper = styled.div`
  background: ${props =>
    props.theme === 'dark'
      ? `rgba(1, 1, 1, 0.95) url(${overlayBlackDot}) repeat scroll 0 0;`
      : `rgba(255, 255, 255, 0.90) url(${overlayWhiteDot}) repeat scroll 0 0;`};
  z-index: 1;
`;

export const NavigationList = styled.nav`
  background: rgba(240, 240, 240, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavLinkStyled = styled(BaseLink)`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: #808080;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 10px 25px;
  border-bottom: 1px solid transparent;

  background: ${props =>
    props.theme === 'dark'
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
