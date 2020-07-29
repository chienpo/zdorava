import styled from 'styled-components';
import { motion } from 'framer-motion';

import { WHITE } from 'constants/colors';

export const AppBox = styled.div`
  background: ${WHITE};
  min-height: 100vh;
  width: 100vw;
`;

export const MotionContent = styled(motion.div)`
  overflow: hidden;
  display: grid;
  min-height: 100vh;
  width: 100vw;
  grid-template-columns: minmax(320px, 1fr);
  grid-template-rows: auto 1fr auto;
  background: ${WHITE};
`;
