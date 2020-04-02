import styled, { keyframes } from 'styled-components';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import homepageGlitchBg from 'assets/images/homepage-yellow-background.jpg';
import { DARK_MODE } from 'app/constants/theme';
import { noiseAnim, noiseAnimTwo } from 'app/animations/keyframes/noise';

export const GlitchLine = styled.div`
  min-height: 1px;
  top: 0;
  left: 0;
  width: 100%;
  background: url(${overlayWhiteDot}) center center no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: -10px;
`;

export const Divider = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const HomepageContentWrapper = styled.div`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `rgba(1, 1, 1, 0.9) url(${overlayBlackDot}) repeat scroll 0 0;`
      : `rgba(255, 255, 255, 0.90) url(${overlayWhiteDot}) repeat scroll 0 0;`};

  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
`;

const blink = keyframes`
  0%{opacity: 0;}
  50%{opacity: 1;}
  100%{opacity: 0;}
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

  ${({ bgIsToggling }) => bgIsToggling && `
    background: url(${homepageGlitchBg}) center center no-repeat;
    background-position: center;
    background-size: cover;
  `};
`;

export const HomepageHGroup = styled.div`
  opacity: 0.8;
  padding: 20px 0 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HomepageTitle = styled.h1`
  font-family: 'Orbitron-Bold', sans-serif;
  color: darkslategrey;
  font-size: 65.5px;
  line-height: 80px;
  letter-spacing: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-transform: uppercase;
  margin: 0;
`;

export const Name = styled.div`
  font-size: 22px;
  line-height: 1;
  margin-top: auto;
  margin-bottom: 17px;
  color: yellow;
`;

export const SurName = styled.div`
  color: white;
  margin-left: 15px;
  display: inline;
`;

export const HomepageSubtitle = styled.div`
  font-family: 'Orbitron-Medium', sans-serif;
  text-align: center;
  font-size: 15.5px;
  line-height: 18px;
  letter-spacing: 5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
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
    color: white;
    text-transform: uppercase;
    background: transparent;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  &:before {
    left: -2px;
    text-shadow: 1px 0 blue;
    animation: ${noiseAnimTwo} 3s infinite linear alternate-reverse;
  }

  &:after {
    left: 2px;
    text-shadow: -1px 0 red;
    animation: ${noiseAnim} 4s infinite alternate-reverse;
  }
`;
