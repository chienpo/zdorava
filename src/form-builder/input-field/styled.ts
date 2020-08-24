import styled from 'styled-components';

import {
  BLACK_50,
  BLACK_90,
  GRAY,
  GRAY_LIGHT,
  RED,
  WHITE,
} from '~/constants/colors';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const LabelText = styled.span`
  display: block;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
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
