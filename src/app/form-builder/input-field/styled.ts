import styled from 'styled-components';

import { BLACK_50, GRAY, GRAY_LIGHT, RED, WHITE } from '../../constants/colors';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
    width: 100%;
    display: block;
`;

export const LabelText = styled.span`
  display: block;
  font-weight: bold;
  padding-bottom: 5px;
  font-size: 14px;
`;

const inputStyles = `
  padding: 6px 12px;
  font-family: Orbitron-Medium, sans-serif;
  font-size: 14px;
  color: ${GRAY};
  border: 1px solid ${GRAY_LIGHT};
  background: ${WHITE};
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${GRAY_LIGHT};
    box-shadow: inset 0 0 0 ${BLACK_50}, 0 0 8px ${GRAY_LIGHT};
  }
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  line-height: 30px;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;

  ${inputStyles}
`;

export const RequiredStar = styled.span`
  color: ${RED};
  margin-left: 5px;
`;
