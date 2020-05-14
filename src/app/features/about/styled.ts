import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'app/constants/colors';
import overlayWhiteDot from 'assets/images/overlay_white.png';

export const GridLogo = styled.div`
  display: grid;
  grid-template-columns: calc((100vh - 182px) / 3) calc((100vh - 182px) / 3) calc((100vh - 182px) / 3);
  grid-template-rows: calc((100vh - 182px) / 3) calc((100vh - 182px) / 3) calc((100vh - 182px) / 3);
  height: 100%;
  width: 100%;
`;

export const GridFigure = styled.div`
  width: 100%;
  height: 100%;

  figure {
    position: relative;

    img {
      ${({ title }) => title === 'hello-photo' && `
        filter: contrast(120%);
      `};
    }

    &::after {
      content: "";
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
      ${({ title }) => title !== 'hello-photo' && `
        box-shadow: inset 0px 0px 50px 25px rgba(0,0,0,0.3);
      `};
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
    }
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

export const AccordionBox = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-left: 50px;
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
  font-size: 31px;
  margin-bottom: 28px;
  font-weight: normal;

  strong {
    color: ${RED};
  }
`;
