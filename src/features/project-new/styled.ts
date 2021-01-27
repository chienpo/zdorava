import styled from 'styled-components';
import { Link } from 'react-router5';

import { RED, BLACK, WHITE_80, RED_70 } from '~/constants/colors';
import { AnimatedMain, AnimatedSection } from '~/animations/animated';

export const AnimatedMainStyled = styled(AnimatedMain)`
  padding-top: 70px;
  text-align: center;
`;

export const AnimatedSectionStyled = styled(AnimatedSection)`
  @media screen and (min-width: 767px) {
    max-width: 50vw;
  }

  @media screen and (min-width: 481px) {
    max-width: 70vw;
  }

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  padding: 15px 15px 15px 15px;
  background: ${WHITE_80};
  box-shadow: ${WHITE_80} 0 0 130px 160px;
`;

export const Title = styled.span`
  @media screen and (min-width: 767px) {
    font-size: 55px;
  }

  margin-bottom: 30px;
  font-size: 35px;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
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
