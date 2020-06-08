import styled from 'styled-components';
import { Link } from 'react-router5';

import { ROUTE_NAME_ABOUT } from 'app/constants/routes';
import {
  BLACK,
  GRAY_MEDIUM_10,
  RED,
  WHITE,
  WHITE_20,
} from '../../../../constants/colors';
import navigationPortfolioBackground from '../../../../../assets/images/navigation-portfolio-background.png';
import navigationAboutBackgroundLogo from '../../../../../assets/images/contacts-background.png';
import { DARK_MODE } from '../../../../constants/theme';
import {
  pulseAnim,
  pulseAnimWhite,
} from '../../../../animations/keyframes/pulse';
import { mirrorEffect } from '../../../../css-helpers';

export const LinkOverlayMirrorEffect = styled.div`
  width: 100%;
  height: 100%;

  ${mirrorEffect}
`;

export const MotionLinkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${({ title }: any) =>
      title === 'about'
        ? navigationAboutBackgroundLogo
        : navigationPortfolioBackground})
    right center no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const Text = styled.span`
  display: block;
  position: relative;
  padding-${({ title }) =>
    title === ROUTE_NAME_ABOUT ? 'right' : 'left'}: 55px;
  ${({ title }) =>
    title === ROUTE_NAME_ABOUT ? 'margin-bottom: 10vh;' : 'margin-top: 20vh;'}
  transition: color 0.6s;

  &::${({ title }) => (title === ROUTE_NAME_ABOUT ? 'after' : 'before')} {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 8px solid  ${({ theme }) =>
      theme.mode === DARK_MODE ? WHITE : BLACK};
    ${({ title }) => (title === ROUTE_NAME_ABOUT ? 'right: 0' : 'left: 0')};
    top: 50%;
    transform: translateY(-50%);
    transition: border-color 0.6s;
  }
`;

export const PageLinkStyled = styled(Link)`
  z-index: 4;
  position: absolute;
  text-decoration: none;
  display: flex;
  padding: 0 70px;
  transition: box-shadow 0.2s, background 0.8s;
  font-size: 30px;
  line-height: 38px;
  height: 100%;
  width: 30%;
  box-sizing: border-box;

  ${Text} {
    color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE_20 : BLACK)};

    &::before,
    &::after {
      animation: ${pulseAnimWhite} 5s linear infinite;
    }
  }

  &:hover {
    cursor: pointer;
    background: none;

    ${Text} {
      color: ${RED};

      &::before,
      &::after {
        border-color: ${RED};
        animation: ${pulseAnim} 2s linear infinite;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 30px;
  }

  ${({ routeName }: any) =>
    routeName === 'about'
      ? `
    justify-content: flex-start;
    align-items: center;
    left: 0;
  `
      : `
    justify-content: flex-end;
    align-items: center;
    right: 0;
  `};
`;

export const LinkMirrorEffectBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  justify-content: unset;
  transition: box-shadow 0.8s;
  color: ${({ theme }) =>
    theme.mode === DARK_MODE ? `rgba(255,255,255,0.1)` : `${GRAY_MEDIUM_10}`};
  text-transform: uppercase;
  transition: all 0.8s;
`;
