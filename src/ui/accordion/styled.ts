import styled from 'styled-components';

import { BLACK, RED, WHITE } from '../../constants/colors';

export const Panel = styled.div<{ active: boolean }>`
  font-size: 21px;
  line-height: 38px;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  transition: background 0.4s, color 0.4s;

  &:hover {
    ${({ active }) => !active && `background: ${RED}; color: ${WHITE}`};
  }

  ${({ active }) =>
    active
      ? `
    color: ${WHITE};
    padding-left: 10px;
  `
      : `
    color: ${BLACK}
    font-weight: bold;
    padding-left: 10px;
  `};
`;
