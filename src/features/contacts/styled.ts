import styled from 'styled-components';
import { motion } from 'framer-motion';

import { LIGHT_MODE } from 'constants/theme';
import { BLACK, WHITE } from 'constants/colors';
import { H2 } from 'ui/headings';

export const StyledMotionContactFormWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 5;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const SectionControls = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const FormSection = styled.section`
  width: 100vw;
  box-shadow: 0px -48px 35px 45px ${({ theme }) => theme.mode === LIGHT_MODE && BLACK};
  position: relative;
`;

export const FormBox = styled.div`
  background: ${WHITE};
  padding: 50px 15px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const H2Styled = styled(H2)`
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
