import styled from "styled-components";
import { Link } from "react-router5";

import {GRAY_MEDIUM_10, RED, RED_50, WHITE_20} from "../../../../constants/colors";
import navigationPortfolioBackground from "../../../../../assets/images/navigation-portfolio-background.png";
import navigationPortfolioBackgroundLogo from "../../../../../assets/images/about-logo.png";
import overlayWhiteDot from "../../../../../assets/images/overlay_white.png";

export const Text = styled.span`
  padding: 0 15px;
  display: flex;
`;

export const LinkOverlay = styled.div`
  backdrop-filter: blur(3px);
  position: fixed;
  transition: left 0.8s, right 0.8s;
  width: 100vw;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(2px);
  transition: left 0.4s, right 0.4s;
  z-index: 4;
`;

export const LinkText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  justify-content: unset;
  transition: box-shadow 0.8s;
  font-size: 100px;
  color: ${GRAY_MEDIUM_10};
  transition: all 0.8s;

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
    z-index: 6;

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
  // background: url(${overlayWhiteDot}) repeat scroll 0 0;
  z-index: 4;
  position: fixed;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
  position: fixed;
  transition: box-shadow 0.2s, background 0.8s;

  svg {
    path, polygon {
      fill: ${RED_50} !important;
    }
  }

  ${({ position }: any) => position === 'left' ? `
    top: 50px;
    justify-content: flex-start;
    align-items: flex-start;
  ` : `
    bottom: 135px;
    justify-content: flex-end;
    align-items: flex-end;
  `};

  &:hover {
    box-shadow: ${({ position }: any) => position === 'left' ? '0px 15px 15px 0px' : '0px -15px 15px 0px'} rgba(17,17,17,0.8);
    cursor: pointer;
    background: url(${({ position }: any) => position === 'left' ? navigationPortfolioBackgroundLogo : navigationPortfolioBackground}) right center no-repeat;

    ${LinkText} {
      color: black;
      background: none;
    }

    svg {
      path, polygon {
        fill: ${RED} !important;
      }
    }
  }
`;
