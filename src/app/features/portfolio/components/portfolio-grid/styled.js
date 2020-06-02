import styled from 'styled-components';
import { motion } from 'framer-motion';

import { PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND } from 'app/constants/portfolio';

export const MotionGridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

export const MotionChunkRow = styled(motion.div)`
  @media (min-width: 600px) {
    display: grid;
    grid-row-gap: 10px;

    ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? `
        grid-template-columns: 1fr;
      `
        : `
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
      `};
  }
`;
