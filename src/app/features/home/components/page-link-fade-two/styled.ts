import styled, {keyframes} from "styled-components";
import { Link } from "react-router5";
import posed from "react-pose";

import {BLACK, GRAY_MEDIUM_10, RED, WHITE, WHITE_20} from "../../../../constants/colors";
import navigationPortfolioBackground from "../../../../../assets/images/navigation-portfolio-background.png";
// import navigationAboutBackgroundLogo from "../../../../../assets/images/selfies/7.jpg";
import navigationAboutBackgroundLogo from "../../../../../assets/images/about-logo-1.png";
import {DARK_MODE} from "../../../../constants/theme";
import {pulseAnim, pulseAnimWhite} from "../../../../animations/keyframes/pulse";

const linkOverlayMirrorEffect = keyframes`
  0% {
    transform: scale3d(3.5, 3, 2) rotate3d(0, 0, 1, 135deg)
    translate3d(0px, 50%, 0px);
    visibility: hidden;
  }
  100% {
    opacity: 1;
    transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 135deg) translate3d(0px, -130%, 0px);
    visibility: initial;
  }
`;

export const LinkOverlayMirrorEffect = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:before {
    background: ${({ theme }) => theme.mode === DARK_MODE ? WHITE : BLACK};
    box-sizing: border-box;
    content: '';
    height: 100%;
    left: -10%;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: transform 0.8s ease 0s;
    width: 120%;
    z-index: 6;
    transition: all 0.4s;
    transition-delay: 0.8s;
    animation: ${linkOverlayMirrorEffect} 0.8s;
  }
`;

export const LinkOverlay = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 600 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 600 },
  }
});

export const LinkOverlayAnimated = styled(LinkOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${({ title }: any) => title === 'left' ? navigationAboutBackgroundLogo : navigationPortfolioBackground}) right center no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const Text = styled.span`
  display: block;
  position: relative;
  padding-${({ title }) => title === 'prev' ? 'left' : 'right'}: 55px;
  ${({ title }) => title === 'prev' ? 'margin-top: 20vh;' : 'margin-bottom: 10vh;'}
  transition: color 0.6s;

  &::${({ title }) => title === 'prev' ? 'before' : 'after'} {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 8px solid  ${({ theme }) => theme.mode === DARK_MODE ? WHITE : BLACK};
    ${({ title }) => title === 'prev' ? 'left: 0' : 'right: 0'};
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
    color: ${({ theme }) => theme.mode === DARK_MODE ? WHITE_20 : BLACK};

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

  ${({ title }: any) => title === 'left' ? `
    justify-content: flex-start;
    align-items: center;
    left: 0;
  ` : `
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
  color: ${({ theme }) => theme.mode === DARK_MODE ? `rgba(255,255,255,0.1)` : `${GRAY_MEDIUM_10}`};
  text-transform: uppercase;
  transition: all 0.8s;
`;
