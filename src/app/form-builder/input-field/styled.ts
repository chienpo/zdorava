import styled from 'styled-components';

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
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  line-height: 30px;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
`;
