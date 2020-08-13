import styled from 'styled-components';

import { DARK_MODE } from 'constants/theme';
import { BLACK, RED, RED_70, WHITE, WHITE_90 } from 'constants/colors';

export const LangText = styled.span`
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
  transition: color 0.2s, font-size 0.2s;
  line-height: 20px;
  display: block;
  width: 100px;
`;

export const InputRadio = styled.input`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  appearance: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: -1;

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
  display: inline-flex;
  align-items: center;
  justify-content: center;

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
