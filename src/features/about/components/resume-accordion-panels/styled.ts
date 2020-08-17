import styled from 'styled-components';

export const PanelWrapper = styled.div`
  padding: 25px 5px;
`;

export const H4 = styled.h4`
  text-transform: uppercase;
  font-weight: normal;
`;

export const Strong = styled.strong`
  margin-right: 5px;
`;

export const StackList = styled.ul`
  list-style: none;
  display: inline-flex;
`;

export const StackListItem = styled.li`
  margin-right: 10px;
  display: flex;

  img {
    height: 30px;
  }
`;

export const Li = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

export const LiInline = styled(Li)`
  @media screen and (min-width: 650px) {
    align-items: flex-end;
    flex-direction: row;
  }

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Ul = styled.ul`
  font-size: 18px;
  line-height: 24px;

  strong {
    margin-right: 5px;
  }

  & > ${Li} {
    list-style: none;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
