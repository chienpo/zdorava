import styled from 'styled-components';

import overlayWhiteDot from '~/assets/images/overlay_white.png';
import homepageBg from '~/assets/images/backgrounds/homepage-background-tinyfied.jpg';
import { BLACK, WHITE_90 } from '~/constants/colors';

export const SectionNotFound = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${homepageBg}) center center no-repeat;
  background-size: cover;
`;

export const Overlay = styled.div`
  @media screen and (min-width: 991px) {
    font-size: 400px;
  }

  @media screen and (min-width: 481px) {
    font-size: 240px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${BLACK};
  font-weight: 100;
  font-size: 150px;
  background: ${WHITE_90} url(${overlayWhiteDot}) repeat scroll 0 0;
`;
