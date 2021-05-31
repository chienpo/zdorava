import styled from 'styled-components';

import { pulseIconAnim } from '~/animations/keyframes/pulse';
import { BLACK, RED, WHITE } from '~/constants/colors';
import { ThemeModes } from '~/constants/theme';
import { Button } from '~/ui/button/button';
import { Anchor } from '~/ui/anchor';

export const StyledButton = styled(Button)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:disabled {
    grid-template-columns: 40px auto auto;
    padding: 9px;
  }
`;

export const ContactFormTriggerStyled = styled(Anchor)`
  color: ${({ theme }) => (theme.mode === ThemeModes.Dark ? WHITE : BLACK)};
  animation: ${pulseIconAnim} 4.4s infinite;
`;

export const SuccessMessage = styled.div`
  width: 100%;
  padding: 15px 0;
  color: ${RED};
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;
