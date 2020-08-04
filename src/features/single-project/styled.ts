import styled from 'styled-components';
import { Link } from 'react-router5';

import { RED, BLACK, WHITE_80, WHITE, RED_70 } from 'constants/colors';
import {
  AnimatedDiv,
  AnimatedFigure,
  AnimatedSection,
} from 'animations/animated';

export const AnimatedSectionStyled = styled(AnimatedSection)`
  display: grid;
  min-height: calc(100vh - 70px);
  padding-top: 70px;
`;

export const AnimatedFigureStyled = styled(AnimatedFigure)`
  position: fixed;
  z-index: 0;
  overflow-y: scroll;
  top: 70px;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const AnimatedDescriptionStyled = styled(AnimatedDiv)`
  @media screen and (min-width: 767px) {
    max-width: 50vw;
  }

  @media screen and (min-width: 481px) {
    max-width: 70vw;
    padding: 0 50px 50px 0;
  }

  padding: 15px 15px 15px 15px;

  position: relative;
  height: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  background: ${WHITE_80};
  box-shadow: ${WHITE_80} 0px 0 130px 160px;
`;

export const Title = styled.span`
  @media screen and (min-width: 767px) {
    font-size: 55px;
  }

  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Description = styled.span`
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }

  font-size: 22px;
  margin-bottom: 50px;
`;

export const Category = styled.div`
  @media screen and (min-width: 481px) {
    margin-right: -50px;
  }

  margin-right: -15px;
  margin-top: auto;
  background: ${RED};
  color: ${WHITE};
  padding: 8px 50px;
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  color: ${BLACK};
  text-decoration: none;
  font-size: 54px;
  font-weight: bold;
  margin-bottom: 100px;
  transition: color 0.2s;

  &:hover {
    color: ${RED};
  }
`;

export const StyledRealProjectLink = styled.a`
  color: ${RED};
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
  margin-left: 5px;
  transition: color 0.2s;

  &:hover {
    color: ${RED_70};
  }
`;
