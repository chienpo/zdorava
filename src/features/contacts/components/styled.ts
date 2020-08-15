import styled from 'styled-components';
import { Button } from 'ui/button/button';
import { RED } from 'constants/colors';

export const StyledButton = styled(Button)`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;

  &:disabled {
    grid-template-columns: 40px auto auto;
    padding: 9px;
  }
`;

export const SuccessMessage = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  padding: 15px 0;
  color: ${RED};
  width: 100%;
  text-align: center;
`;
