import styled from 'styled-components';

import { ButtonProps } from './types';

import { BLACK, BLACK_90, RED, RED_70, WHITE } from '~/constants/colors';

export const ButtonStyled = styled.button<ButtonProps>`
  width: ${({ width }) => width || 'auto'};
  padding: 15px 0;
  color: ${WHITE};
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  background: ${({ plain }) => (plain ? BLACK : 'transparent')};
  border: 1px solid ${({ plain }) => (plain ? BLACK : WHITE)};
  outline: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, opacity 0.2s;

  @media (min-width: 767px) {
    padding: 15px;
  }

  &:hover {
    color: ${RED};
    background: ${({ plain }) => plain && BLACK_90};
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
    background: ${RED};
    border-color: ${RED};

    &:disabled {
      opacity: 1;
    }
  }
`;
