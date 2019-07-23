import styled from 'styled-components';

export const Separator = styled.div`
  width: 1px;
  background: white;
  display: block;
  height: 20px;
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
    opacity: 0.7;
    margin-right: 10px;
    display: none;
    
    &:checked {
      opacity: 1;
    }
  } 
  
  span {
    opacity: 0.7;
    font-weight: 100;
  }
  
  input:checked+span {
    text-transform: uppercase;
    opacity: 1;
    font-size: 20px;
  } 
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(240,240,240,0.1);
`;
