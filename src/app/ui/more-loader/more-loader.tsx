import styled from 'styled-components';

import { WHITE_20, WHITE } from 'app/constants/colors';
import { infiniteSpinAnim } from 'app/animations/keyframes/spin';

export const MoreLoader = styled.div`
  height: 280px;
  width: 280px;
  border-radius: 50%;

  border: 2px solid ${WHITE_20};
  border-top-color: ${WHITE};
  animation: ${infiniteSpinAnim} 0.8s linear infinite;
`;
