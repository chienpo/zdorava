import styled from 'styled-components';

export const GridLogo = styled.div`
  display: grid;
  grid-template-columns: calc((100vh - 182px) / 3) calc((100vh - 182px) / 3) calc((100vh - 182px) / 3);
  grid-template-rows: calc((100vh - 182px) / 3) calc((100vh - 182px) / 3) calc((100vh - 182px) / 3);
  height: 100%;
  width: 100%;
`;

export const GridFigure = styled.div`
  width: 100%;
  height: 100%;

  figure {
    position: relative;

    img {
      ${({ title }) => title === 'hello-photo' && `
        filter: contrast(120%);
      `};
    }

    &::after {
      content: "";
      padding-bottom: 100%;
      display: inline-block;
      vertical-align: top;
      ${({ title }) => title !== 'hello-photo' && `
        box-shadow: inset 0px 0px 50px 25px rgba(0,0,0,0.3);
      `};
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
