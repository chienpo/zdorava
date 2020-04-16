import styled from 'styled-components';

import { BLACK, BLACK_90, GRAY, WHITE } from 'app/constants/colors';

export const ButtonStyled = styled.button`
  color: ${WHITE};
  font-weight: normal;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  transition: background 0.2s, opacity 0.2s;
  border: 1px solid ${BLACK};
  background: ${({ plain }: any) => plain ? `${BLACK}` : 'transparent'};
  width: ${({ width }: any) => width || 'auto'};
  outline: none;
  cursor: pointer;
  padding: 15px;

  &:hover {
    background: ${({ plain }: any) => plain && `${BLACK_90}`};
    border-color: ${BLACK_90};
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
