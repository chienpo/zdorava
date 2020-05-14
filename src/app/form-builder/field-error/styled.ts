import styled from 'styled-components';

import { RED } from '../../constants/colors';

export const ErrorBox = styled.div`
  background: ${RED};
  color: white;
  padding: 5px 10px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
`;

export const IconError = styled.span`
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
