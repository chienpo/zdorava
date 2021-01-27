import styled from 'styled-components';

import { DARK_MODE } from '~/constants/theme';
import { BLACK, RED, RED_70, WHITE } from '~/constants/colors';

export const SelectBox = styled.div`
  min-width: 80px;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  .react-select {
    &__indicator {
      padding: 0 2px 0 8px;
      font-size: 28px;

      svg {
        color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
        transition: color 0.2s;
      }
    }

    &__single-value {
      color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
      font-size: 22px;
      transition: color 0.2s;
    }

    &__menu {
      overflow: hidden;
      border-radius: 3px;
      box-shadow: 0 0 0 1px ${RED_70}, 0 4px 11px ${RED_70};
    }

    &__menu-list {
      .react-select__option {
        &--is-focused {
          color: ${WHITE};
        }
      }
    }

    &__control {
      min-height: 28px;
      background-color: transparent;
      border-color: transparent;
      border-radius: 14px;
      cursor: pointer;
      transition: background-color 0.2s, border-color 0.2s;

      &--is-focused {
        color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
        background-color: ${RED_70};
        border: 1px solid ${RED};
        box-shadow: none;

        .react-select__single-value,
        svg {
          color: ${WHITE};
        }
      }

      &:hover {
        background-color: ${RED};
        box-shadow: none;
        cursor: pointer;
      }

      &:hover .react-select__single-value,
      &:hover svg {
        color: ${WHITE};
      }
    }
  }
`;
