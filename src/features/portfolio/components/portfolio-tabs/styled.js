import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionPortfolioTabs = styled(motion.div)`
  padding: 80px 0 5px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
`;
