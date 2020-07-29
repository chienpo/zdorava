import styled from 'styled-components';
import { Button } from 'ui/button/button';
import { RED } from 'constants/colors';

export const StyledButton = styled(Button)`
  display: grid;
  grid-template-columns: ${({ disabled }) =>
    disabled ? '40px auto auto' : '1fr'};
  padding: ${({ disabled }) => disabled && '9px'};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SuccessMessage = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  padding: 15px 0;
  color: ${RED};
  width: 100%;
  text-align: center;
`;
