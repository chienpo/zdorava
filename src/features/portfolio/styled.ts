import styled from 'styled-components';
import { motion } from 'framer-motion';

import { WHITE } from 'constants/colors';

export const SectionPortfolio = styled(motion.section)`
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  padding: 80px 15px 0;
`;

export const ItemsLoadingStateDescription = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
`;

export const ItemsLoadingSpinnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  color: ${WHITE};
`;
