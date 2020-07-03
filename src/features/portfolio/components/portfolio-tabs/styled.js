import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionPortfolioTabs = styled(motion.div)`
  width: 100%;
  margin: 100px auto 8px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
`;
