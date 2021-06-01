import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import { RED, BLACK, WHITE_80, WHITE, RED_70 } from '~/constants/colors';
import {
  AnimatedDiv,
  AnimatedFigure,
  AnimatedSection,
} from '~/animations/animated';

export const AnimatedSectionStyled = styled(AnimatedSection)`
  display: grid;
  min-height: calc(100vh - 70px);
  padding-top: 70px;
`;

export const AnimatedFigureStyled = styled(AnimatedFigure)`
  position: fixed;
  top: 70px;
  bottom: 0;
  z-index: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow-y: scroll;
`;

export const AnimatedDescriptionStyled = styled(AnimatedDiv)`
  @media screen and (min-width: 767px) {
    max-width: 50vw;
  }

  @media screen and (min-width: 481px) {
    max-width: 70vw;
    padding: 0 50px 50px 0;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  margin-left: auto;
  padding: 15px 15px 15px 15px;
  text-align: right;
  background: ${WHITE_80};
  box-shadow: ${WHITE_80} 0 0 130px 160px;
`;

export const AnimatedDescriptionContentStyled = styled(AnimatedDiv)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  margin-left: auto;
  text-align: right;
`;

export const Title = styled.span`
  @media screen and (min-width: 767px) {
    font-size: 55px;
  }

  margin-bottom: 30px;
  font-size: 35px;
  text-transform: uppercase;
`;

export const Description = styled.div`
  @media screen and (min-width: 767px) {
    font-size: 30px;
  }

  margin-bottom: 50px;
  font-size: 22px;
`;

export const Category = styled.div`
  @media screen and (min-width: 481px) {
    margin-right: -50px;
  }

  margin-top: auto;
  margin-right: -15px;
  padding: 8px 50px;
  color: ${WHITE};
  font-size: 24px;
  background: ${RED};
`;

export const EditProjectLink = styled(BaseLink)`
  margin-right: 5px;
  color: ${RED_70};
  font-weight: bold;
  text-decoration: none;
  outline: none;
  transition: color 0.2s;

  &:focus {
    color: ${RED_70};
  }

  &:hover {
    color: ${RED};
  }
`;

export const StyledLink = styled(BaseLink)`
  margin-bottom: 100px;
  color: ${BLACK};
  font-weight: bold;
  font-size: 54px;
  text-decoration: none;
  outline: none;
  transition: color 0.2s;

  &:focus {
    color: ${RED_70};
  }

  &:hover {
    color: ${RED};
  }
`;

export const StyledRealProjectLink = styled.a`
  margin-left: 5px;
  color: ${RED};
  font-weight: bold;
  font-size: 40px;
  text-decoration: none;
  outline: none;
  transition: color 0.2s;

  &:focus {
    color: ${RED_70};
  }

  &:hover {
    color: ${RED_70};
  }
`;

export const DescriptionList = styled.ul`
  display: inline-block;
  list-style: none;

  li::before {
    padding-right: 5px;
    color: ${BLACK};
    content: '●';
  }
`;
