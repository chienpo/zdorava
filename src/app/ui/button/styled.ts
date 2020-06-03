import styled from 'styled-components';

import { BLACK, BLACK_90, GRAY, RED, WHITE } from 'app/constants/colors';

export const ButtonStyled = styled.button`
  color: ${({ plain }: any) => (plain ? WHITE : 'white')};
  border: 1px solid ${({ plain }: any) => (plain ? BLACK : 'white')};
  background: ${({ plain }: any) => (plain ? `${BLACK}` : 'transparent')};
  width: ${({ width }: any) => width || 'auto'};
  font-weight: normal;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  padding: 15px 0;
  transition: background 0.2s, color 0.2s, border-color 0.2s, opacity 0.2s;

  @media (min-width: 767px) {
    padding: 15px;
  }

  &:hover {
    background: ${({ plain }: any) => plain && `${BLACK_90}`};
    color: ${RED};
    border-color: ${({ plain }: any) => (plain ? BLACK_90 : RED)};
  }

  &:focus {
    color: ${GRAY};
    border-color: ${GRAY};

    color: ${'rgba(255,0,0,0.7)'};
    border-color: ${'rgba(255,0,0,0.7)'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &.active {
    color: ${WHITE};

    border-color: ${RED};
    background: ${RED};

    &:disabled {
      opacity: 1;
    }
  }
`;
