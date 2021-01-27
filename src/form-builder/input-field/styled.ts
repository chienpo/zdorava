import styled from 'styled-components';

import {
  BLACK,
  BLACK_50,
  BLACK_90,
  GRAY,
  GRAY_LIGHT,
  RED,
  RED_70,
  WHITE,
} from '~/constants/colors';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  text-align: right;
`;

export const LabelText = styled.span`
  display: block;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  text-align: right;
`;

const inputStyles = `
  padding: 6px 12px;
  font-size: 14px;
  color: ${GRAY};
  border: 1px solid ${GRAY_LIGHT};
  background: ${WHITE};
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: inset 0 0 0 ${BLACK_90}, 0 0 8px ${GRAY_LIGHT};
  }

  &:focus {
    border-color: ${GRAY_LIGHT};
    box-shadow: inset 0 0 0 ${BLACK_50}, 0 0 8px ${GRAY_LIGHT};
  }

  &:disabled {
    border-color: ${GRAY_LIGHT};
    box-shadow: none;
    color: ${GRAY_LIGHT}
    background: rgba(0,0,0,0.05);
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  line-height: 30px;
  ${inputStyles}
`;

export const Textarea = styled.textarea`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  line-height: 30px;
  resize: none;
  ${inputStyles}
`;

export const RequiredStar = styled.span`
  margin-left: 5px;
  color: ${RED};
`;

export const ButtonEmitter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 50px;
  color: ${WHITE};
  background: ${BLACK};
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s, color 0.2s;

  &:hover {
    color: ${RED};
    background: ${BLACK_90};
    border-color: ${BLACK_90};
  }

  &:focus {
    color: ${RED_70};
    border-color: ${RED_70};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const InputFile = styled.input`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  line-height: 30px;
  ${inputStyles}
`;
