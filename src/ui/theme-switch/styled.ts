import styled from 'styled-components';

import { BLACK, RED, RED_70, WHITE, WHITE_30 } from 'constants/colors';

export const SwitchBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const SlideRaw = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.6s;

  &:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    transform: translateX(0);
    background-color: ${WHITE};
    transition: background-color 0.4s, transform 0.4s;
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
  width: 56px;
  height: 28px;
  border-radius: 14px;
  overflow: hidden;
  color: transparent;
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
  margin: 0;

  & + ${SlideRaw} {
    background-color: ${BLACK};
  }

  &:checked + ${SlideRaw} {
    background-color: ${WHITE_30};
  }

  &:checked + ${SlideRaw}::after {
    transform: translateX(27px);
    background-color: ${BLACK};
  }

  &:focus + ${SlideRaw} {
    background-color: ${RED_70};
  }

  &:hover + ${SlideRaw} {
    background-color: ${RED};
  }

  &:disabled {
    opacity: 0;

    & + ${SlideRaw} {
      cursor: not-allowed;
      opacity: 0.2;
    }
  }
`;
