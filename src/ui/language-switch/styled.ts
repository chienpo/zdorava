import styled from 'styled-components';

import { DARK_MODE } from 'constants/theme';
import {
  BLACK,
  RED,
  RED_70,
  WHITE,
  WHITE_90,
  WHITE_SMOKE_10,
} from 'constants/colors';

export const LangText = styled.span`
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
  transition: color 0.2s, font-size 0.2s;
  line-height: 20px;
  display: block;
  width: 100px;
`;

export const InputRadio = styled.input`
  cursor: pointer;
  margin-right: 10px;
  position: absolute;
  opacity: 0;
  appearance: none;

  &:focus + ${LangText} {
    font-weight: 600;
    color: ${RED_70};
  }

  & + ${LangText} {
    text-transform: uppercase;
    opacity: 0.6;
    font-size: 14px;

    &:hover {
      opacity: 1;
      color: ${RED};
      font-size: 20px;
    }
  }

  &:checked + ${LangText} {
    opacity: 1;
    font-size: 20px;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  display: block;
  text-align: center;
  line-height: 1;
  background: transparent;
  height: 100%;
  position: relative;
`;

export const SwitchBox = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE ? `transparent` : `${WHITE_SMOKE_10}`};

  ${Label}:first-child:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    display: block;
    height: 100%;
    background: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE_90 : BLACK)};
  }
`;
