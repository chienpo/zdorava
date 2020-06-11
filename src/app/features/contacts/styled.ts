import styled from 'styled-components';
import { motion } from 'framer-motion';

import { LIGHT_MODE } from 'constants/theme';
import { BLACK, WHITE } from 'constants/colors';
import { H2 } from 'app/ui/headings';

export const StyledMotionContactFormWrapper = styled(motion.div)`
  position: fixed;
  z-index: 5;
  top: 0;
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
