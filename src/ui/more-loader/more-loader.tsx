import styled from 'styled-components';

import { WHITE_20, WHITE } from '~/constants/colors';
import { infiniteSpinAnim } from '~/animations/keyframes/spin';

export const MoreLoader = styled.div<{ size?: string }>`
  width: ${({ size }) => size || '280px'};
  height: ${({ size }) => size || '280px'};
  border: 2px solid ${WHITE_20};
  border-top-color: ${WHITE};
  border-radius: 50%;
  animation: ${infiniteSpinAnim} 0.8s linear infinite;
`;
