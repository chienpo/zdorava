import styled from 'styled-components';

import { DARK_MODE } from 'app/constants/theme';

export const Separator = styled.div`
  width: 2px;
  background: white;
  display: block;
  height: 20px;
  opacity: 0.9;
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: whitesmoke;
  background: transparent;
  margin: 0 10px;
  width: 80px;
  height: 100%;
  
  input {
    cursor: pointer;
    opacity: 0.9;
    margin-right: 10px;
    display: none;
    
    &:checked {
      opacity: 1;
    }
  } 
  
  span {
    opacity: 0.4;
    font-weight: 100;
  }
  
  input:checked+span {
    text-transform: uppercase;
    opacity: 1;
    font-size: 20px;
  } 
`;

export const Switch = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(240,240,240,0.1);
  
  ${({ theme }) => theme.mode === DARK_MODE ? `
    ${Separator} {
      background: white;
    }
    ${Label} {
      color: white;
    }
  ` : `
    ${Separator} {
      background: black;
    }
    ${Label} {
      color: black;
    }
  `};
`;
