import styled from 'styled-components';

import { BLACK_30 } from '~/constants/colors';
import { AnimatedDiv, AnimatedFigure } from '~/animations/animated';

export const GridLogoWrapper = styled(AnimatedDiv)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledMotionFigure = styled(AnimatedFigure)`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    width: 100%;
    padding-bottom: 100%;
    vertical-align: top;
    ${({ title }) =>
      title !== 'Hello logo' &&
      `
      box-shadow: inset 0px 0px 50px 25px ${BLACK_30};
    `};

    content: '';
  }

  ${({ title }) =>
    title === 'Hello logo' &&
    `
    filter: contrast(125%);`};
`;
