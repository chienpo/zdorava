import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'app/constants/colors';

export const SectionAbout = styled.section`
  display: grid;
  grid-template-columns: auto 50%;
  height: 100%;
  align-items: center;

  @media screen and (min-width: 1199px) {
    grid-template-columns: repeat(auto-fill, 50vw);
  }

  grid-template-columns: 1fr;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: 1199px) {
    width: 70%;
  }

  width: 100%;
`;

export const AccordionBox = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-left: 50px;
`;

export const DeveloperName = styled.h1`
  padding: 10px 0 10px 20px;
  background: ${BLACK};
  color: ${WHITE};
  text-align: left;
  font-size: 56px;
  line-height: 66px;
  letter-spacing: 0;
  text-transform: uppercase;
  margin: 0 0 22px;
`;

export const Position = styled.strong`
  display: block;
  font-size: 30px;
  line-height: 38px;
  font-weight: normal;
  text-transform: none;
  font-weight: 100;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;

  strong {
    color: ${RED};
  }
`;
