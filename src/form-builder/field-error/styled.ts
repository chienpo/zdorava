import styled from 'styled-components';

import { RED } from '~/constants/colors';

export const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 5px 10px;
  color: white;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  background: ${RED};
`;

export const IconError = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  color: ${RED};
  font-weight: bold;
  font-size: 12px;
  background: white;
  border-radius: 7px;
`;
