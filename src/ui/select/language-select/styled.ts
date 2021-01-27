import styled from 'styled-components';

import { DARK_MODE } from '~/constants/theme';
import { BLACK, RED, RED_70, WHITE, WHITE_30 } from '~/constants/colors';

export const SelectBox = styled.div`
  min-width: 73px;
  text-transform: uppercase;
  cursor: pointer;

  .react-select {
    &__indicator {
      padding: 0 6px 0 8px;
      font-size: 22px;

      svg {
        color: ${WHITE};
        transition: color 0.2s;
      }
    }

    &__single-value {
      color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : WHITE)};
      font-size: 20px;
      transition: color 0.2s;
    }

    &__value-container {
      padding-left: 5px;
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
      background-color: ${({ theme }) =>
        theme.mode === DARK_MODE ? WHITE_30 : BLACK};
      border-color: transparent;
      box-sizing: content-box;
      border-radius: 16px;
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
