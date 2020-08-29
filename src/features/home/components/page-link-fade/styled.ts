import styled from 'styled-components';
import { Link } from 'react-router5';

import navigationPortfolioBackground from '~/assets/images/backgrounds/navigation-portfolio-background.png';
import navigationAboutBackgroundLogo from '~/assets/images/backgrounds/navigation-contacts-background.png';
import { ROUTE_NAME_ABOUT } from '~/router/routes';
import { mirrorEffect } from '~/helpers/mirror-effect';
import { BLACK, RED, RED_70, WHITE, WHITE_30 } from '~/constants/colors';
import { DARK_MODE } from '~/constants/theme';
import { pulseAnim, pulseAnimWhite } from '~/animations/keyframes/pulse';

export const LinkOverlayMirrorEffect = styled.div`
  width: 100%;
  height: 100%;
  ${mirrorEffect}
`;

export const MotionLinkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: url(${({ title }) =>
      title === ROUTE_NAME_ABOUT
        ? navigationAboutBackgroundLogo
        : navigationPortfolioBackground})
    center center no-repeat;
  background-size: cover;
`;

export const Text = styled.span`
  position: relative;
  display: block;
  margin-top: 20vh;
  padding-left: 55px;
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE_30 : BLACK)};
  text-transform: uppercase;
  filter: brightness(150%);
  transition: color 0.6s;

  ${({ title }) => (title === ROUTE_NAME_ABOUT ? '&::after' : '&::before')} {
    position: absolute;
    ${({ title }) => (title === ROUTE_NAME_ABOUT ? 'right: 0' : 'left: 0')};

    top: 50%;
    display: block;
    width: 22px;
    height: 22px;
    border: 8px solid
      ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
    border-radius: 50%;
    transform: translateY(-50%);
    transition: border-color 0.6s;
    content: '';
  }
`;

export const PageLinkStyled = styled(Link)`
  @media only screen and (min-width: 767px) {
    align-items: center;
    padding-right: 70px;
    padding-left: 70px;
  }

  position: absolute;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  width: 40%;
  height: 100%;
  padding-right: 25px;
  padding-left: 40px;
  font-size: 30px;
  line-height: 38px;
  text-decoration: none;
  outline: none;
  transition: box-shadow 0.2s, background 0.8s;

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
    background: none;
    cursor: pointer;

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
