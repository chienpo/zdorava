import styled from 'styled-components';

import { Button } from '~/ui/button/button';
import { RED } from '~/constants/colors';

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

export const SuccessMessage = styled.div`
  width: 100%;
  padding: 15px 0;
  color: ${RED};
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;
