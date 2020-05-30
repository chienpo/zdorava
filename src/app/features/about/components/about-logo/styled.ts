import styled from 'styled-components';
import posed from 'react-pose';

export const GridLogoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
`;

const posedFigureOptions = {
  enter: {
    opacity: 1,
    left: 0,
    top: 0,
    scale: 1,
    transition: { duration: 1200, delay: 400 },
  },
  exit: {
    opacity: 0,
    scale: 5,
    left: ({ left }: { left: number }) => `${left}%`,
    top: ({ top }: { top: number }) => `${top}%`,
    transition: { duration: 1200, delay: 100 },
  },
};

export const StyledPosedFigure = styled(posed.figure(posedFigureOptions))`
  position: relative;

  &::after {
    content: '';
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
    ${({ alt }) =>
      alt !== 'About logo 5' &&
      `
      box-shadow: inset 0px 0px 50px 25px rgba(0,0,0,0.3);
    `};
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StyledImg = styled.img`
  display: flex;
  width: 100%;
  height: auto;

  ${({ alt }) =>
    alt === 'About logo 5' &&
    `
    filter: contrast(120%);
  `};
`;
