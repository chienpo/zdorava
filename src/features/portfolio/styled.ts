import styled from 'styled-components';

import { BLACK, WHITE } from 'constants/colors';
import { AnimatedSection } from 'animations/animated';

export const AnimatedSectionStyled = styled(AnimatedSection)`
  height: 100%;
  padding-top: 69px;
  background-color: $ {BLACK};
  box-shadow: 0 0 20px 10px ${BLACK};
  z-index: 2;
  position: relative;
`;

export const ItemsLoadingStateDescription = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${WHITE};
  background: ${BLACK};
`;

export const ItemsLoadingSpinnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  color: ${WHITE};
`;
