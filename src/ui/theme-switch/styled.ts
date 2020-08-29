import styled from 'styled-components';

import { BLACK, RED, RED_70, WHITE, WHITE_30 } from '~/constants/colors';

export const SwitchBox = styled.div`
  display: inline-grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const SlideRaw = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: background-color 0.6s;

  &::after {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 18px;
    height: 18px;
    background-color: ${WHITE};
    border-radius: 50%;
    transform: translateX(0);
    transition: background-color 0.4s, transform 0.4s;
    content: '';
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
  width: 56px;
  height: 28px;
  overflow: hidden;
  color: transparent;
  border-radius: 14px;
`;

export const InputCheckbox = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  outline: none;
  appearance: none;

  & + ${SlideRaw} {
    background-color: ${BLACK};
  }

  &:checked + ${SlideRaw} {
    background-color: ${WHITE_30};

    &::after {
      background-color: ${BLACK};
      transform: translateX(27px);
    }
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
