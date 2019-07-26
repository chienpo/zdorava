import styled from 'styled-components';

export const Panel = styled.div<{ active: boolean }>`
  font-family: Orbitron-Bold, sans-serif;
  font-size: 21px;
  line-height: 38px;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;

  ${({ active }) =>
    active
      ? `
    color: white;
    background: black;
    padding-left: 10px;
    margin-bottom: 24px;
 `
      : `
    color: rgba(100, 0, 0, 0.5);
    background: transparent;
    margin-bottom: 18px;
  `};
`;

export const RowContent = styled.div<{ active: boolean }>`
  overflow: hidden;
  opacity: 1;
  height: auto;
  font-family: Orbitron-Light, sans-serif;
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
