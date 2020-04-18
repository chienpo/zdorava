import styled from "styled-components";

import {WHITE_50, WHITE_90} from "../../../../constants/colors";
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
`;

export const PageLinkStyled = styled.a`
  position: fixed;
  top: 0;
  bottom: 0;
  ${({ position }: any) => position === 'left' ? 'left: 0' : 'right: 0'};
  z-index: 3;
  width: 80px;

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
    left: ${({ position }: any) => position === 'left' ? '25vw' : '0'};
    right: ${({ position }: any) => position === 'left' ? '0' : '25vw'};
    left: 0;
    right: 0;
    backdrop-filter: blur(2px);
  }

  ${LinkText} {
    align-items: ${({ position }: any) => position === 'left' ? 'flex-start' : 'flex-end'};
    color: rgba(200,200, 200, 0.7);
    color: ${({ position }: any) => position === 'left' ? 'black' : 'white'};
    background: ${WHITE_50} url(${overlayWhiteDot}) repeat scroll 0 0;
    transition: width 0.8s, background 0.8s, color 0.8s, box-shadow 0.8s;
  }

  &:hover {
    cursor: pointer;
    width: 25vw;

    ${LinkOverlay} {
      display: block;
    }

    ${LinkText} {
      color: black;
      background: none;
      align-items: ${({ position }: any) => position === 'left' ? 'flex-start' : 'flex-end'};
      box-shadow: ${({ position }: any) => position === 'left' ? '-36px 0 38px 45px' : '36px 0 38px 45px'} rgba(17,17,17,0.8);
    }
  }
`;
