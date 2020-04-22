import styled from "styled-components";
import { Link } from "react-router5";

import {WHITE, WHITE_20, WHITE_50, WHITE_90} from "../../../../constants/colors";
import overlayWhiteDot from "../../../../../assets/images/overlay_white.png";
import navigationPortfolioBackground from "../../../../../assets/images/navigation-portfolio-background.png";
import navigationPortfolioBackgroundLogo from "../../../../../assets/images/about-logo.png";

export const LinkOverlay = styled.div`
  backdrop-filter: blur(3px);
  position: fixed;
  top: 50px;
  transition: left 0.8s, right 0.8s;
  bottom: 135px;
  width: 100vw;
  display: block;
  z-index: 1;
  display: none;
  pointer-events: none;
  transition: left 0.4s, right 0.4s;
`;

export const LinkText = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  justify-content: unset;
  padding-top: 80px;
  color: ${WHITE};
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

export const PageLinkStyled = styled(Link)`
  position: fixed;
  z-index: 3;
  width: 100vw;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-orientation: mixed;
  background-size: cover;
  transition: width 0.8s, background 0.8s;

  ${({ position }: any) => position === 'left' ? `
    top: 50px;
    bottom: 50vh;
  ` : `
    top: 50vh;
    bottom: 135px;
  `}

  ${LinkOverlay} {
    left: 0;
    right: 0;
    backdrop-filter: blur(2px);
  }

  ${LinkText} {
    justify-content: ${({ position }: any) => position === 'left' ? 'flex-start' : 'flex-end'};
    align-items: ${({ position }: any) => position === 'left' ? 'flex-start' : 'flex-end'};
    transition: width 0.8s, background 0.8s, color 0.8s, box-shadow 0.8s;
    font-size: 100px;
    color: rgba(100,100,100,0.1)
  }

  &:hover {
    cursor: pointer;
    width: 100vw;
    background: ${WHITE} url(${({ position }: any) => position === 'left' ? navigationPortfolioBackgroundLogo : navigationPortfolioBackground}) right center no-repeat;

    ${LinkOverlay} {
      display: block;
      left: ${({ position }: any) => position === 'left' ? '100vw' : '0'};
      right: ${({ position }: any) => position === 'left' ? '0' : '100vw'};
    }

    ${LinkText} {
      color: black;
      background: none;
      box-shadow: ${({ position }: any) => position === 'left' ? '0px 15px 15px 0px' : '0px -15px 15px 0px'} rgba(17,17,17,0.8);
    }
  }
`;
