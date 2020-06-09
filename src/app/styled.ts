import styled from 'styled-components';
import { motion } from 'framer-motion';

import { WHITE } from 'app/constants/colors';

export const AppBox = styled.div`
  background: ${WHITE};
  min-height: 100vh;
  width: 100vw;
`;

export const MotionContent = styled(motion.div)`
  overflow: hidden;
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: minmax(320px, 1fr);
  grid-template-rows: auto 1fr auto;
  background: ${WHITE};
  width: 100vw;
`;
