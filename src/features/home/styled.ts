import styled from 'styled-components';

import { DARK_MODE } from '~/constants/theme';
import { BLACK_80, RED, WHITE_80 } from '~/constants/colors';
import { noiseAnim, noiseAnimTwo } from '~/animations/keyframes/noise';

export const SectionHome = styled.section`
  position: relative;
  height: 100%;
`;

export const HomepageHGroup = styled.div`
  pointer-events: none;
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

  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  display: inline;
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE_80 : BLACK_80)};
`;

export const HomepageSubtitle = styled.div`
  @media only screen and (min-width: 479px) {
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 5px;
  }

  filter: brightness(150%);
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  color: ${RED};
  height: 18px;
`;

export const WebsiteSubtitle = styled.div`
  font-weight: bold;
  letter-spacing: 33px;
  font-size: 18px;
  left: 13px;
  background: transparent;
  color: transparent;
  line-height: 18px;
  text-transform: uppercase;
  position: relative;
  margin: 5px auto 0;

  &::before,
  &::after {
    content: 'zdorava';
    position: absolute;
    right: 0;
    top: 0;
    color: ${({ theme }) =>
      theme.mode === DARK_MODE ? 'rgba(200, 200, 200, 0.7)' : BLACK_80};
    text-transform: uppercase;
    background: transparent;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  &::before {
    left: -2px;
    text-shadow: 1px 0 rgba(47, 79, 79, 0.8);
    animation: ${noiseAnimTwo} 3s infinite linear alternate-reverse;
  }

  &::after {
    left: 2px;
    text-shadow: -1px 0 ${RED};
    animation: ${noiseAnim} 4s infinite alternate-reverse;
  }
`;
