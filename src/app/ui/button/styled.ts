import styled from 'styled-components';

import {BLACK, BLACK_90, GRAY, WHITE, WHITE_90} from 'app/constants/colors';

export const ButtonStyled = styled.button`
  color: ${({ plain }: any) => plain ? WHITE : GRAY};
  border: 1px solid ${({ plain }: any) => plain ? BLACK : GRAY};
  background: ${({ plain }: any) => plain ? `${BLACK}` : 'transparent'};
  width: ${({ width }: any) => width || 'auto'};
  font-weight: normal;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  padding: 15px;
  transition: all 0.2s;

  &:hover {
    background: ${({ plain }: any) => plain && `${BLACK_90}`};
    color: ${WHITE_90};
    border-color: ${({ plain }: any) => plain ? BLACK_90 : WHITE_90};
  }

  &:focus {
    color: ${GRAY};
    border-color: ${GRAY};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &.active {
    cursor: default;
    color: ${WHITE};
    border-color: ${WHITE};

    &:disabled {
      opacity: 1;
    }
  }
`;
