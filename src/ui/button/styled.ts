import styled from 'styled-components';

import { BLACK, BLACK_90, RED, RED_70, WHITE } from '~/constants/colors';

import { ButtonProps } from './button';

export const ButtonStyled = styled.button<ButtonProps>`
  color: ${WHITE};
  border: 1px solid ${({ plain }) => (plain ? BLACK : WHITE)};
  background: ${({ plain }) => (plain ? BLACK : 'transparent')};
  width: ${({ width }) => width || 'auto'};
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
    background: ${({ plain }) => plain && BLACK_90};
    color: ${RED};
    border-color: ${({ plain }) => (plain ? BLACK_90 : RED)};
  }

  &:focus {
    color: ${RED_70};
    border-color: ${RED_70};
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
