import styled from 'styled-components';

import { GRAY, RED, TUNDORA, WHITE } from 'app/constants/colors';

export const ButtonStyled = styled.button`
  color: ${TUNDORA};
  font-weight: normal;
  text-decoration: none;
  padding: 15px 0;
  font-size: 16px;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  border: 1px solid ${TUNDORA};
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: ${RED};
    color: ${RED};
  }

  &:focus {
    color: ${GRAY};
    border-color: ${GRAY};
  }

  &.active {
    cursor: default;
    color: ${WHITE};
    border-color: ${WHITE};
  }
`;
