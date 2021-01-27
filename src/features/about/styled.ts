import styled from 'styled-components';

import { BLACK, RED, WHITE } from '~/constants/colors';

export const SectionAbout = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 70px;
`;

export const GridContent = styled.div`
  @media screen and (min-width: 991px) {
    grid-template-columns: 50vw 50vw;
  }

  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

export const LogoWrap = styled.div`
  @media screen and (min-width: 991px) {
    width: 70%;
    margin: 0 auto;
  }

  @media screen and (min-width: 480px) {
    margin-bottom: 60px;
  }

  margin-bottom: 15px;
`;

export const AccordionBox = styled.div`
  @media (min-width: 480px) {
    padding-left: 60px;
  }

  @media screen and (min-width: 991px) {
    padding-left: 0;
  }

  width: 100%;
  padding-left: 15px;
`;

export const DeveloperName = styled.h1`
  margin: 0 0 22px;
  padding: 10px 0 10px 20px;
  color: ${WHITE};
  font-size: 53px;
  line-height: 66px;
  letter-spacing: 0;
  text-align: left;
  text-transform: uppercase;
  background: ${BLACK};
`;

export const Position = styled.strong`
  display: block;
  margin-top: 10px;
  color: white;
  font-weight: 100;
  font-size: 28px;
  line-height: 38px;
  text-transform: uppercase;

  strong {
    color: ${RED};
  }
`;
