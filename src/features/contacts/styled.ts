import styled from 'styled-components';

import { LIGHT_MODE } from '~/constants/theme';
import { BLACK, WHITE } from '~/constants/colors';
import { H2 } from '~/ui/headings';
import { AnimatedDiv } from '~/animations/animated';

export const StyledMotionContactFormWrapper = styled(AnimatedDiv)`
  position: fixed;
  top: 0;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

export const SectionControls = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const FormSection = styled.section`
  position: relative;
  width: 100vw;
  box-shadow: 0 -48px 35px 45px ${({ theme }) => theme.mode === LIGHT_MODE && BLACK};
`;

export const FormBox = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 50px 15px;
  background: ${WHITE};
`;

export const H2Styled = styled(H2)`
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;
