import styled from 'styled-components';

import { BLACK, WHITE } from '~/constants/colors';
import { AnimatedDiv, AnimatedSection } from '~/animations/animated';

export const AnimatedSectionStyled = styled(AnimatedSection)`
  position: relative;
  z-index: 2;
  height: 100%;
  padding-top: 69px;
  background-color: ${BLACK};
  box-shadow: 0 0 20px 10px ${BLACK};
`;

export const ItemsLoadingStateDescriptionAnimated = styled(AnimatedDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: ${WHITE};
  text-transform: uppercase;
  background: ${BLACK};
`;

export const ItemsLoadingSpinnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  color: ${WHITE};
`;

export const NoItemsFoundMessage = styled(ItemsLoadingSpinnerBox)`
  min-height: 200px;
  padding: 0;
`;
