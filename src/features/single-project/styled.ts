import styled from 'styled-components';
import { Link } from 'react-router5';
import { motion } from 'framer-motion';

import { RED, BLACK, WHITE_80, WHITE } from 'constants/colors';

export const StyledMotionProjectSection = styled(motion.section)`
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
`;

export const StyledMotionFigure = styled(motion.div)`
  width: 100%;
  overflow-y: scroll;
  height: calc(100vh - 70px);
`;

export const StyledImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 70vw;
`;

export const StyledLink = styled(Link)`
  color: ${BLACK};
  text-decoration: none;
  font-size: 54px;
  font-weight: bold;
  transition: color 0.2s;
  margin-bottom: 100px;

  &:hover {
    color: ${RED};
  }
`;

export const StyledMotionDescription = styled(motion.div)`
  position: fixed;

  right: 0;
  top: 0;
  height: 100vh;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  background: ${WHITE_80};
  box-shadow: ${WHITE_80} 0px 0 130px 160px;
  padding: 70px 50px 50px 0;
`;

export const Title = styled.span`
  font-size: 55px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export const Description = styled.span`
  font-size: 30px;
`;

export const Category = styled.span`
  margin-top: auto;
  background: red;
  color: ${WHITE};
  padding: 10px 50px;
  font-size: 18px;
  margin-right: -50px;
`;
