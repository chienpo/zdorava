import styled from 'styled-components';

import { DARK_MODE } from 'constants/theme';
import { BLACK, RED, WHITE, WHITE_SMOKE_10 } from 'constants/colors';

export const Separator = styled.div`
  width: 2px;
  background: ${WHITE};
  display: block;
  height: 20px;
  opacity: 0.9;
`;

export const LangText = styled.span`
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
  transition: color 0.2s, font-size 0.2s;
`;

export const InputRadio = styled.input`
  cursor: pointer;
  margin-right: 10px;

  & + ${LangText} {
    text-transform: uppercase;
    opacity: 1;
    font-size: 20px;
  }

  &:not(:checked) + ${LangText} {
    opacity: 0.6;
    font-size: 14px;

    &:hover {
      opacity: 1;
      color: ${RED};
      font-size: 20px;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  background: transparent;
  margin: 0 10px;
  width: 80px;
  height: 100%;
`;

export const Switch = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE ? `transparent` : `${WHITE_SMOKE_10}`};

  ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `
    ${Separator} {
      background: ${WHITE};
    }
  `
      : `
    ${Separator} {
      background: ${BLACK};
    }
  `};
`;
