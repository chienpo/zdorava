import styled from "styled-components";

import {WHITE_20, WHITE_50, WHITE_90} from "../../../../constants/colors";
import overlayWhiteDot from "../../../../../assets/images/overlay_white.png";
import navigationPortfolioBackground from "../../../../../assets/images/navigation-portfolio-background.png";
import navigationPortfolioBackgroundLogo from "../../../../../assets/images/about-logo.png";

export const LinkOverlay = styled.div`
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  transition: left 0.8s, right 0.8s;
  bottom: 0;
  display: block;
  z-index: 1;
  display: none;
  pointer-events: none;
  transition: left 0.4s, right 0.4s;
`;

export const LinkText = styled.div`
  position: relative;
  z-index: 2;
  background: ${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  justify-content: unset;
  padding-top: 80px;
  transition: box-shadow 0.8s;

  &:before {
    background: ${WHITE_20} none repeat scroll 0 0;
    box-sizing: border-box;
    content: '';
    height: 100%;
    left: -10%;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale3d(3.5, 3, 2) rotate3d(0, 0, 1, 135deg)
      translate3d(0px, 100%, 0px);
    transition: transform 0.8s ease 0s;
    visibility: hidden;
    width: 120%;
    z-index: 1;

    transition: all 0.4s;
    transition-delay: 0.8s;
  }

  &:hover {
    &:before {
      opacity: 1;
      transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 135deg)
        translate3d(0px, -130%, 0px);
      visibility: initial;
    }
  }
`;

export const PageLinkStyled = styled.a`
  position: fixed;
  top: 0;
  bottom: 0;
  ${({ position }: any) => position === 'left' ? 'left: 0' : 'right: 0'};
  z-index: 3;
  width: 80px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-l;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 80px;
  background: url(${({ position }: any) => position === 'left' ? navigationPortfolioBackgroundLogo : navigationPortfolioBackground}) right center no-repeat;
  background-size: cover;
  transition: width 0.8s, background 0.8s;

  ${LinkOverlay} {
    left: 0;
    right: 0;
    backdrop-filter: blur(2px);
  }

  ${LinkText} {
    align-items: ${({ position }: any) => position === 'left' ? 'flex-start' : 'flex-end'};
    color: rgba(200,200, 200, 0.7);
    color: ${({ position }: any) => position === 'left' ? 'gray' : 'white'};
    background: ${WHITE_50} url(${overlayWhiteDot}) repeat scroll 0 0;
    transition: width 0.8s, background 0.8s, color 0.8s, box-shadow 0.8s;
  }

  &:hover {
    cursor: pointer;
    width: 25vw;

    ${LinkOverlay} {
      display: block;
      left: ${({ position }: any) => position === 'left' ? '25vw' : '0'};
      right: ${({ position }: any) => position === 'left' ? '0' : '25vw'};
    }

    ${LinkText} {
      color: black;
      background: none;
      align-items: ${({ position }: any) => position === 'left' ? 'flex-start' : 'flex-end'};
      box-shadow: ${({ position }: any) => position === 'left' ? '-36px 0 38px 45px' : '36px 0 38px 45px'} rgba(17,17,17,0.8);
    }
  }
`;
