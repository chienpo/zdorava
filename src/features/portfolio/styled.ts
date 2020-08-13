import styled from 'styled-components';

import { BLACK, WHITE } from 'constants/colors';
import { AnimatedSection } from 'animations/animated';

export const AnimatedSectionStyled = styled(AnimatedSection)`
  height: 100%;
  margin-top: 69px;
  box-shadow: 0 0 80px 23px ${BLACK};
  background-color: ${BLACK};
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
