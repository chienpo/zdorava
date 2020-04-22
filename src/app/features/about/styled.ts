import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'app/constants/colors';
import overlayWhiteDot from 'assets/images/overlay_white.png';

export const GridLogo = styled.div`
  display: grid;
  grid-template-columns: calc((100vh - 182px) / 3) calc((100vh - 182px) / 3) calc((100vh - 182px) / 3);
  grid-template-rows: calc((100vh - 182px) / 3) calc((100vh - 182px) / 3) calc((100vh - 182px) / 3);
  height: 100%;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(255,255,255,0.1) url(${overlayWhiteDot}) repeat;
  }
`;

export const GridFigure = styled.figure`
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SectionAbout = styled.section`
  display: grid;
  grid-template-columns: auto 50%;
  height: 100%;
  align-items: center;
  grid-column-gap: 20px;
`;

export const IntroduceImage = styled.figure`
  position: absolute;
  width: calc(50% - 300px);
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 233;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.1) url(${overlayWhiteDot});
  }

  img {
    width: auto;
    height: 100%;
  }
`;

export const AccordionBox = styled.div`
  width: 100%;
  padding-top: 100px;
`;

export const DeveloperName = styled.h1`
  padding: 10px 0 0 20px;
  background: ${BLACK};
  color: ${WHITE};
  text-align: left;
  font-family: Orbitron-Bold, sans-serif;
  font-size: 56px;
  line-height: 66px;
  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 22px;
`;

export const Position = styled.h2`
  font-family: Orbitron-Bold, sans-serif;
  font-size: 31px;
  margin-bottom: 28px;

  strong {
    color: ${RED};
  }
`;
