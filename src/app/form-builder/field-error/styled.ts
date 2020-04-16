import styled from 'styled-components';

import { RED_70 } from '../../constants/colors';

export const ErrorBox = styled.div`
  font-family: Orbitron-Bold, sans-serif;
  background: ${RED_70};
  color: white;
  padding: 5px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
`;

export const IconError = styled.span`
    font-family: Orbitron-Bold, sans-serif;
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 7px;
    color: red;
    margin-right: 10px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;
