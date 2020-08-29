import styled from 'styled-components';

import { DARK_MODE } from '~/constants/theme';
import { BLACK, RED, RED_70, WHITE, WHITE_90 } from '~/constants/colors';

export const Label = styled.label`
  position: relative;
  display: block;
  height: 100%;
  line-height: 1;
  text-align: center;
  background: transparent;
  cursor: pointer;
`;

export const SwitchBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;

  ${Label} {
    &:not(:last-child)::after {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 2px;
      height: 100%;
      background: ${({ theme }) =>
        theme.mode === DARK_MODE ? WHITE_90 : BLACK};
      content: '';
    }
  }
`;

export const LangText = styled.span`
  display: block;
  width: 65px;
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
  line-height: 20px;
  transition: color 0.2s, font-size 0.2s;

  @media only screen and (min-width: 400px) {
    width: 100px;
  }
`;

export const InputRadio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  appearance: none;

  &:focus + ${LangText} {
    color: ${RED_70};
    font-weight: 600;
  }

  & + ${LangText} {
    font-size: 14px;
    text-transform: uppercase;
    opacity: 0.6;
  }

  &:not(:disabled) + ${LangText} {
    &:hover {
      color: ${RED};
      font-size: 20px;
      opacity: 1;
    }
  }

  &:disabled + ${LangText} {
    cursor: not-allowed;
    opacity: 0.2;
  }

  &:checked + ${LangText} {
    font-size: 20px;
    opacity: 1;
  }
`;
