import styled from 'styled-components';
import { Link } from 'react-router5';

import { RED, RED_70, WHITE, WHITE_70 } from '~/constants/colors';
import { pulseAnimWhite } from '~/animations/keyframes/pulse';
import { AnimatedDiv } from '~/animations/animated';

export const LinkBoxAnimated = styled(AnimatedDiv)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  z-index: 2;
`;

export const StyledLink = styled(Link)`
  display: flex;
  padding: 20px;
  color: ${WHITE};
  background-color: ${RED_70};
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.4s, background-color 0.4s;
  animation: ${pulseAnimWhite} 5s linear infinite;

  &:hover {
    background-color: ${RED};
  }

  &:focus {
    color: ${WHITE_70};
    background-color: ${RED};
  }
`;
