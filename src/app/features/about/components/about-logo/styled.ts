import styled from 'styled-components';
import { motion } from 'framer-motion';

import { BLACK_30 } from 'constants/colors';

export const GridLogoWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const StyledMotionFigure = styled(motion.figure)`
  position: relative;

  &::after {
    content: '';
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    ${({ alt }: any) =>
      alt !== 'Hello logo' &&
      `
      box-shadow: inset 0px 0px 50px 25px ${BLACK_30};
    `};
  }
`;

export const StyledImg = styled.img`
  display: flex;
  width: 100%;

  ${({ alt }) =>
    alt === 'Hello logo' &&
    `
    filter: contrast(120%);
  `};
`;
