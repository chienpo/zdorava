import styled from 'styled-components';

import {BLACK, DARK_SLATE_GREY, GRAY, RED, WHITE} from '../../constants/colors';

export const Panel = styled.div<{ active: boolean }>`
  font-size: 21px;
  line-height: 38px;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  transition: background 0.4s;
  font-weight: bold;

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

export const RowContent = styled.div<{ active: boolean }>`
  overflow: hidden;
  opacity: 1;
  height: auto;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.2px;

  ul {
    padding-top: 5px;
  }
  ul > li {
    margin-bottom: 12px;

    strong {
      margin-right: 5px;
    }
  }

  ${({ active }) =>
    active
      ? `
    opacity: 1;
    height: auto;
  `
      : `
    height: 1px;
    opacity: 0;
  `};
`;

export const Row = styled.div`
  cursor: pointer;
`;
