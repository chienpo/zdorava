import styled from 'styled-components';
import { mirrorEffect } from '../../../../css-helpers';
import { BLACK } from '../../../../constants/colors';

export const GalleryRow = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25%;
  grid-gap: 10px;
`;

export const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;

  &:hover {
    ${mirrorEffect}
  }
`;

export const Img = styled.img`
  width: 100%;
  border: 1px solid ${BLACK};
  filter: grayscale(100%);
`;
