import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from 'ui/button/button';

export const MotionPortfolioTabs = styled(motion.div)`
  width: 100%;
  margin: 100px auto 8px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
`;

export const ButtonStyled = styled(Button)`
  @media (min-width: 320px) {
    font-size: 12px;
  }
`;
