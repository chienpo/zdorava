import styled from 'styled-components';

import { DARK_MODE } from '../../constants/theme';
import { BLACK, WHITE, WHITE_SMOKE, WHITE_SMOKE_10 } from '../../constants/colors';

export const Separator = styled.div`
  width: 2px;
  background: ${WHITE};
  display: block;
  height: 20px;
  opacity: 0.9;
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: ${WHITE_SMOKE};
  background: transparent;
  margin: 0 10px;
  width: 80px;
  height: 100%;

  input {
    cursor: pointer;
    opacity: 0.9;
    margin-right: 10px;
    display: none;

    &:checked {
      opacity: 1;
    }
  }

  span {
    opacity: 0.4;
    font-weight: 100;
  }

  input:checked+span {
    text-transform: uppercase;
    opacity: 1;
    font-size: 20px;
  }
`;

export const Switch = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${WHITE_SMOKE_10};

  ${({ theme }) => theme.mode === DARK_MODE ? `
    ${Separator} {
      background: ${WHITE};
    }
    ${Label} {
      color: ${WHITE};
    }
  ` : `
    ${Separator} {
      background: ${BLACK};
    }
    ${Label} {
      color: ${BLACK};
    }
  `};
`;
