import styled from 'styled-components';

export const PanelWrapper = styled.div`
  padding: 25px 5px;
`;

export const Strong = styled.strong`
  margin-right: 5px;
`;

export const Ul = styled.ul`
  font-size: 18px;
  line-height: 24px;

  li {
    list-style: none;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul > li {
    margin-bottom: 12px;

    strong {
      margin-right: 5px;
    }
  }
`;
