import styled, { keyframes } from 'styled-components';

import { DARK_MODE } from 'app/constants/theme';
import {BLACK_90, DARK_SLATE_GREY, RED, WHITE_50, WHITE_90} from 'app/constants/colors';
import { noiseAnim, noiseAnimTwo } from 'app/animations/keyframes/noise';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import homepageGlitchBg from 'assets/images/homepage-yellow-background.jpg';
import navigationPortfolioBackground from 'assets/images/navigation-portfolio-background.png';
import navigationPortfolioBackgroundRight from 'assets/images/navigation-portfolio-background-right.png';

export const Divider = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const HomepageContentWrapper = styled.div`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_90} url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;`};

  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  position: relative;
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Image = styled.div<{ bgIsToggling: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  animation: ${blink} 0.4s linear;
  opacity: 0;
  transition: opacity 0.4s;
  z-index: 1;

  ${({ bgIsToggling }) => bgIsToggling && `
    background: url(${homepageGlitchBg}) center center no-repeat;
    background-size: cover;
  `};
`;

export const HomepageHGroup = styled.div`
  padding: 20px 0 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HomepageTitle = styled.h1`
  font-family: 'Orbitron-Bold', sans-serif;
  color: ${DARK_SLATE_GREY};
  color: rgba(200, 200, 200, 0.7);
  color: black;
  font-size: 65.5px;
  line-height: 80px;
  letter-spacing: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 10px;
  font-weight: 100;
`;

export const Name = styled.div`
  margin-left: 15px;
  display: inline;
  margin-right: 30px;
`;

export const SurName = styled(Name)`
  margin-top: auto;
`;

export const HomepageSubtitle = styled.div`
  font-family: 'Orbitron-Medium', sans-serif;
  text-align: center;
  font-size: 15.5px;
  line-height: 18px;
  letter-spacing: 5px;
  font-weight: 700;
  color: red;
  height: 18px;
`;

export const WebsiteSubtitle = styled.div`
  font-family: 'Orbitron-Medium', sans-serif;
  font-weight: 700;
  letter-spacing: 33px;
  font-size: 18px;
  left: 13px;
  background: transparent;
  color: transparent;
  line-height: 18px;
  text-transform: uppercase;
  position: relative;
  margin: 5px auto 0;

  &:before,
  &:after {
    content: "zdorava";
    position: absolute;
    right: 0;
    top: 0;
    color: rgba(200, 200, 200, 0.7);
    text-transform: uppercase;
    background: transparent;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  &:before {
    left: -2px;
    text-shadow: 1px 0 rgba(47,79,79,0.8);
    animation: ${noiseAnimTwo} 3s infinite linear alternate-reverse;
  }

  &:after {
    left: 2px;
    text-shadow: -1px 0 ${RED};
    animation: ${noiseAnim} 4s infinite alternate-reverse;
  }
`;

export const LinkOverlay = styled.div`
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  z-index: 1;
  display: none;
`;

export const LinkInner = styled.div`
  position: relative;
  z-index: 2;
  background: ${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;
  display: flex;
  height: 100%;
  width: 100%;
  color: rgba(200,200, 200, 0.7);
  justify-content: center;
  justify-content: unset;
  padding-top: 80px;
  transition: box-shadow 0.8s;
`;

export const LeftNav = styled.a`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-l;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 80px;
  color: rgba(200,200,200,0.3);
  background: url(${navigationPortfolioBackgroundRight}) right center no-repeat;
  background-size: cover;
  transition: width 0.8s, background 0.8s;

  &:hover {
    cursor: pointer;
    width: 25vw;

    ${LinkOverlay} {
      display: block;
    }

    ${LinkInner} {
      transition: width 0.8s, background 0.8s;
      background: ${WHITE_50} url(${overlayWhiteDot}) repeat scroll 0 0;
      color: rgba(100,100, 100,1);
    }
  }

  &:hover {
    ${LinkInner} {
      box-shadow: -36px 0 38px 45px rgba(17,17,17,0.8);
    }
  }

  ${LinkInner} {
    align-items: flex-start;
  }
`;

export const RightNav = styled(LeftNav)`
  background: url(${navigationPortfolioBackground}) left center no-repeat;
  right: 0;

  &:hover {
    ${LinkInner} {
      box-shadow: 36px 0 38px 45px rgba(17,17,17,0.8);
    }
  }

  ${LinkInner} {
    align-items: flex-end;
  }
`;
