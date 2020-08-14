import styled from 'styled-components';

import { WHITE_20, WHITE } from 'constants/colors';
import { infiniteSpinAnim } from 'animations/keyframes/spin';

export const MoreLoader = styled.div<{ size?: string }>`
  height: ${({ size }) => size || '280px'};
  width: ${({ size }) => size || '280px'};
  border-radius: 50%;
  border: 2px solid ${WHITE_20};
  border-top-color: ${WHITE};
  animation: ${infiniteSpinAnim} 0.8s linear infinite;
`;
