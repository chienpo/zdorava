import styled from 'styled-components';
import { Link } from 'react-router5';

import { ROUTE_NAME_ABOUT } from 'router/routes';
import { mirrorEffect } from 'helpers/mirror-effect';
import { BLACK, RED, RED_70, WHITE, WHITE_30 } from 'constants/colors';
import { DARK_MODE } from 'constants/theme';
import navigationPortfolioBackground from 'assets/images/backgrounds/navigation-portfolio-background.png';
import navigationAboutBackgroundLogo from 'assets/images/backgrounds/navigation-contacts-background.png';
import { pulseAnim, pulseAnimWhite } from 'animations/keyframes/pulse';

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
  background: url(${({ title }) =>
      title === ROUTE_NAME_ABOUT
        ? navigationAboutBackgroundLogo
        : navigationPortfolioBackground})
    center center no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const Text = styled.span`
  filter: brightness(150%);
  display: block;
  position: relative;
  padding-left: 55px;
  margin-top: 20vh;
  text-transform: uppercase;
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE_30 : BLACK)};
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
  @media only screen and (min-width: 767px) {
    padding-left: 70px;
    padding-right: 70px;
    align-items: center;
  }

  width: 40%;
  align-items: flex-start;
  padding-left: 40px;
  padding-right: 25px;
  z-index: 4;
  position: absolute;
  text-decoration: none;
  font-size: 30px;
  line-height: 38px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  transition: box-shadow 0.2s, background 0.8s;
  outline: none;

  ${Text} {
    ${({ routeName }) =>
      routeName === ROUTE_NAME_ABOUT
        ? `
    padding-right: 55px;
    margin-top: 15vh;
  `
        : `
    padding-left: 55px;
    margin-top: 30vh;
  `};

    &::before,
    &::after {
      animation: ${pulseAnimWhite} 5s linear infinite;
    }
  }

  &:focus {
    ${Text} {
      color: ${RED_70};

      &::before,
      &::after {
        border-color: ${RED_70};
      }
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

  ${({ routeName }) =>
    routeName === ROUTE_NAME_ABOUT
      ? `
    justify-content: flex-start;
    left: 0;
  `
      : `
    justify-content: flex-end;
    right: 0;
  `};
`;

export const LinkMirrorEffectBox = styled.div`
  position: relative;
  display: flex;
  justify-content: unset;
`;
