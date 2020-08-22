import styled from 'styled-components';

import { mirrorEffect } from '~/helpers/mirror-effect';
import { BLACK } from '~/constants/colors';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 20% 20% 20%;
  grid-gap: 10px;
  list-style: none;
`;

export const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: block;

  &:hover {
    ${mirrorEffect}
  }
`;

export const Img = styled.img`
  width: 100%;
  border: 1px solid ${BLACK};
  filter: grayscale(100%);
`;
