import styled from 'styled-components';

import {BLACK, DARK_SLATE_GREY, RED, WHITE} from '../../constants/colors';

export const Panel = styled.div<{ active: boolean }>`
  font-size: 21px;
  line-height: 38px;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  transition: background 0.4s, color 0.4s;

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
    background: ${DARK_SLATE_GREY};
    background: transparent;
    color: ${BLACK}
    font-weight: bold;
    padding-left: 10px;
  `};
`;

export const RowContent = styled.div`
  overflow: hidden;
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
`;

export const Row = styled.div`
  cursor: pointer;
`;
