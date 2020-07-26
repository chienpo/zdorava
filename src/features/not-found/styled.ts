import styled from 'styled-components';
import { motion } from 'framer-motion';

import overlayWhiteDot from 'assets/images/overlay_white.png';
import homepageBg from 'assets/images/backgrounds/homepage-background.png';

import { BLACK, WHITE_90 } from 'constants/colors';

export const SectionNotFound = styled(motion.section)`
  background: url(${homepageBg}) center center no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Overlay = styled.figure`
  background: ${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;

  @media screen and (min-width: 991px) {
    font-size: 400px;
  }

  @media screen and (min-width: 481px) {
    font-size: 240px;
  }

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  color: ${BLACK};
  font-weight: 100;
  font-family: MontserratThin;
`;
