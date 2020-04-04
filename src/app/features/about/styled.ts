import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'app/constants/colors';

export const SectionAbout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  align-items: center;
`;

export const IntroduceImage = styled.figure`
  padding: 0 21.5%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
  }
`;

export const AccordionBox = styled.div`
  width: 100%;
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
