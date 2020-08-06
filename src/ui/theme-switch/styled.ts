import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'constants/colors';

export const SwitchBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  align-items: center;
`;

export const SlideRaw = styled.div`
  width: 70px;
  height: 34px;
  border-radius: 17px;
  display: flex;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    top: 6px;
    left: 6px;
    border-radius: 50%;
    transform: translateX(0);
    background-color: ${WHITE};
    transition: background-color 0.4s, transform 0.4s;
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
`;

export const InputCheckbox = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  appearance: none;
  outline: none;

  & + ${SlideRaw} {
    background: ${BLACK}
    transition: background 0.2s;
  }

  &:checked + ${SlideRaw} {
    background: ${WHITE}
  }

  &:checked + ${SlideRaw}::after {
    transform: translateX(36px);
    background-color: ${BLACK}
  }

  &:focus + ${SlideRaw} {
    box-shadow: 0 0 0 2px ${RED};
  }

  &:disabled {
    opacity: 0;

    & + ${SlideRaw} {
      cursor: not-allowed;
      opacity: 0.2;
    }
  }
`;

// TODO: Check accessability behavior with label as wrapper
export const HiddenSwitchLabel = styled.span`
  height: 0;
  width: 0;
  overflow: hidden;
  display: block;
`;
