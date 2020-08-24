import styled from 'styled-components';

import { mirrorEffect } from '~/helpers/mirror-effect';
import { BLACK } from '~/constants/colors';

export const List = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20% 20% 20%;
  list-style: none;
`;

export const Figure = styled.figure`
  position: relative;
  display: block;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${mirrorEffect}
  }
`;

export const Img = styled.img`
  width: 100%;
  border: 1px solid ${BLACK};
  filter: grayscale(100%);
`;
