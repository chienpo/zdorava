import styled from 'styled-components';

import { WHITE } from '~/constants/colors';
import { AnimatedDiv } from '~/animations/animated';

export const AppBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${WHITE};
`;

export const MotionContent = styled(AnimatedDiv)`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(320px, 1fr);
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: ${WHITE};
`;
