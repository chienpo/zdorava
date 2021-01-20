import styled from 'styled-components';

export const SectionAuth = styled.section`
  display: flex;
  align-items: center;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  padding-top: 70px;
`;

export const GridContent = styled.div`
  width: 100%;
`;

export const AccordionBox = styled.div`
  @media (min-width: 480px) {
    padding-left: 60px;
  }

  @media screen and (min-width: 991px) {
    padding-left: 0;
  }

  width: 100%;
  padding-left: 15px;
`;
