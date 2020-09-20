import styled from 'styled-components';
import { motion } from 'framer-motion';

import { DARK_MODE } from '~/constants/theme';
import { BLACK_80, RED, WHITE_80 } from '~/constants/colors';
import { noiseAnim, noiseAnimTwo } from '~/animations/keyframes/noise';

export const MainMotionStyled = styled(motion.div)`
  position: relative;
  height: 100%;
`;

export const SectionHome = styled.section`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 50px 0 20px;
  pointer-events: none;
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

  display: inline;
  margin-bottom: 20px;
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE_80 : BLACK_80)};
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const HomepageSubtitle = styled.div`
  @media only screen and (min-width: 479px) {
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 5px;
  }

  height: 18px;
  color: ${RED};
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  filter: brightness(150%);
`;

export const WebsiteSubtitle = styled.div`
  position: relative;
  left: 13px;
  margin: 5px auto 0;
  color: transparent;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 33px;
  text-transform: uppercase;
  background: transparent;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    color: ${({ theme }) =>
      theme.mode === DARK_MODE ? 'rgba(200, 200, 200, 0.7)' : BLACK_80};
    text-transform: uppercase;
    background: transparent;
    content: 'zdorava';
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
