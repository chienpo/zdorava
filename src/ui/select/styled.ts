import styled from 'styled-components';

import { BLACK_50, GRAY, GRAY_LIGHT, WHITE } from '~/constants/colors';

export const SelectBox = styled.div`
  width: 100%;
  cursor: pointer;

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__single-value {
    color: ${GRAY};
    font-size: 14px;
    transition: color 0.2s;
  }

  .react-select__control {
    min-height: 44px;

    &--is-focused {
      border: 1px solid ${GRAY_LIGHT};
      box-shadow: inset 0 0 0 ${BLACK_50}, 0 0 8px ${GRAY_LIGHT};
    }

    &:hover {
      border-color: ${GRAY_LIGHT};
      box-shadow: inset 0 0 0 ${BLACK_50}, 0 0 8px ${GRAY_LIGHT};
      cursor: pointer;
    }
  }

  .react-select__menu {
    box-shadow: inset 0 0 0 ${BLACK_50}, 0 0 8px ${GRAY_LIGHT};
  }

  .react-select__menu-list {
    padding: 0;

    .react-select__option {
      cursor: pointer;
      transition: color 0.2s, background-color 0.2s;

      &--is-focused {
        color: ${WHITE};
      }
    }
  }
`;
