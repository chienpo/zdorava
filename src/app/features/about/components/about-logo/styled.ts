import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GridLogoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`;

export const StyledMotionFigure = styled(motion.figure)`
  position: relative;

  &::after {
    content: '';
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
    ${({ alt }: any) =>
      alt !== 'About logo 5' &&
      `
      box-shadow: inset 0px 0px 50px 25px rgba(0,0,0,0.3);
    `};
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StyledImg = styled.img`
  display: flex;
  width: 100%;
  height: auto;

  ${({ alt }) =>
    alt === 'About logo 5' &&
    `
    filter: contrast(120%);
  `};
`;
