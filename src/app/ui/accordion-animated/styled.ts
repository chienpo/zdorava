import styled from 'styled-components';

import { BLACK, DARK_SLATE_GREY, RED, WHITE } from '../../constants/colors';

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
    background: ${RED};
    padding-left: 10px;
  `
      : `
    background: ${DARK_SLATE_GREY};
    background: transparent;
    color: ${BLACK}
    font-weight: bold;
    padding-left: 10px;
  `};
`;

export const Row = styled.div`
  cursor: pointer;
  overflow: hidden;
`;
