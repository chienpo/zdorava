import styled from 'styled-components';

import { DARK_SLATE_GREY, RED, WHITE } from 'app/constants/colors';

export const Panel = styled.div<{ active: boolean }>`
  font-size: 21px;
  line-height: 38px;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    ${({ active }) =>
    !active && `background: ${RED}; color: ${WHITE}`};
  }

  ${({ active }) =>
    active
      ? `
    color: ${WHITE};
    background: ${RED};
    padding-left: 10px;
    margin-bottom: 24px;
  `
      : `
    color: ${WHITE};
    background: ${DARK_SLATE_GREY};
    padding-left: 10px;
    margin-bottom: 18px;
  `};
`;

export const RowContent = styled.div`
  overflow: hidden;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const Ul = styled.ul`
  ul {
    padding-top: 5px;
  }
  ul > li {
    margin-bottom: 12px;

    strong {
      margin-right: 5px;
    }
  }
`

export const Row = styled.div`
  cursor: pointer;
`;
