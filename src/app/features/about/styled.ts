import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'app/constants/colors';

export const SectionAbout = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: auto 50%;
  width: 100%;

  @media screen and (min-width: 991px) {
    grid-template-columns: repeat(auto-fill, 50vw);
  }

  grid-template-columns: 1fr;
`;

export const LogoWrap = styled.div`
  @media screen and (min-width: 991px) {
    width: 70%;
    margin-bottom: 0;
  }

  margin: 0 auto 50px;
`;

export const AccordionBox = styled.div`
  width: 100%;
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
