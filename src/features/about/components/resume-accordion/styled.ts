import styled from 'styled-components';

export const PanelWrapper = styled.div`
  padding: 25px 5px;
`;

export const H4 = styled.h4`
  font-weight: normal;
  text-transform: uppercase;
`;

export const Strong = styled.strong`
  margin-right: 5px;
`;

export const StackList = styled.ul`
  display: inline-flex;
  list-style: none;
`;

export const StackListItem = styled.li`
  display: flex;
  margin-right: 10px;

  img {
    height: 30px;
  }
`;

export const Li = styled.li`
  margin-bottom: 10px;
  list-style: none;
`;

export const LiInline = styled(Li)`
  @media screen and (min-width: 650px) {
    flex-direction: row;
    align-items: flex-end;
  }

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Ul = styled.ul`
  font-size: 18px;
  line-height: 24px;

  strong {
    margin-right: 5px;
  }

  & > ${Li} {
    margin-bottom: 10px;
    list-style: none;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
