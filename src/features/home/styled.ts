import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import { DARK_MODE } from 'constants/theme';
import { BLACK_90, DARK_SLATE_GREY, RED, WHITE_80 } from 'constants/colors';
import { noiseAnim, noiseAnimTwo } from 'animations/keyframes/noise';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white_four.png';
import homepageGlitchBg from 'assets/images/backgrounds/homepage-yellow-background.jpg';

export const MotionWrap = styled(motion.section)`
  position: relative;
  height: 100%;
`;

export const DottedOverlay = styled.div`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `${BLACK_90} url(${overlayBlackDot}) repeat scroll 0 0;`
      : `${WHITE_80} url(${overlayWhiteDot}) repeat scroll 0 0;`};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Image = styled.div<{ bgIsToggling: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  animation: ${blink} 0.4s linear;
  opacity: 0;
  transition: opacity 0.4s;
  z-index: 1;

  ${({ bgIsToggling }) =>
    bgIsToggling &&
    `
    background: url(${homepageGlitchBg}) center center no-repeat;
    background-size: cover;
  `};
`;

export const HomepageHGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px 0 20px;
  position: relative;
  z-index: 2;
`;

export const StyledH1 = styled.h1`
  @media only screen and (min-width: 479px) {
    font-size: 30px;
    line-height: 36px;
  }

  @media only screen and (min-width: 767px) {
    font-size: 65px;
    line-height: 80px;
  }

  color: black;
  letter-spacing: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 400;
  color: ${DARK_SLATE_GREY};
  color: rgba(200, 200, 200, 0.7);
  font-size: 22px;
  line-height: 28px;
  display: inline;
`;

export const HomepageSubtitle = styled.div`
  text-align: center;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 5px;
  font-weight: 700;
  color: red;
  height: 18px;
`;

export const WebsiteSubtitle = styled.div`
  font-family: MontserratBold;
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
    content: 'zdorava';
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
    text-shadow: 1px 0 rgba(47, 79, 79, 0.8);
    animation: ${noiseAnimTwo} 3s infinite linear alternate-reverse;
  }

  &:after {
    left: 2px;
    text-shadow: -1px 0 ${RED};
    animation: ${noiseAnim} 4s infinite alternate-reverse;
  }
`;
