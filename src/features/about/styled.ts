import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'constants/colors';

export const SectionAbout = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 70px;
`;

export const GridContent = styled.div`
  @media screen and (min-width: 991px) {
    grid-template-columns: repeat(auto-fill, 50vw);
  }

  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
`;

export const LogoWrap = styled.div`
  @media screen and (min-width: 991px) {
    width: 70%;
    margin: 0 auto;
  }

  margin-bottom: 50px;
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
  font-size: 53px;
  line-height: 66px;
  letter-spacing: 0;
  text-transform: uppercase;
  margin: 0 0 22px;
`;

export const Position = styled.strong`
  display: block;
  font-size: 28px;
  line-height: 38px;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
  font-weight: 100;

  strong {
    color: ${RED};
  }
`;
