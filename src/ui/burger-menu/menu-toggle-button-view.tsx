import * as React from 'react';
import styled from 'styled-components';
import { MotionProps } from 'framer-motion';

import { BLACK, RED_70, RED, WHITE } from '~/constants/colors';
import { DARK_MODE } from '~/constants/theme';
import { AnimatedPath } from '~/animations/animated';

const BurgerButton = styled.button`
  position: absolute;
  top: 12px;
  left: 17px;
  display: flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;

  path {
    transition: stroke 0.4s;
    stroke: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
  }

  &:focus path {
    stroke: ${RED_70};
  }

  &:hover path {
    stroke: ${RED};
  }
`;

const Path: React.FC<MotionProps & {
  stroke: string;
  d?: string;
}> = props => (
  <AnimatedPath
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="square"
    {...props}
  />
);

interface Props {
  onClick: () => void;
}

export const MenuToggleButtonView: React.FC<Props> = ({ onClick }) => (
  <BurgerButton aria-label="burger-menu-button" type="button" onClick={onClick}>
    <svg height="46" viewBox="0 0 22 22">
      <Path
        stroke={BLACK}
        variants={{
          closed: { d: 'M 2 4 L 20 4' },
          open: { d: 'M 4 18 L 18 4' },
        }}
      />
      <Path
        stroke={BLACK}
        d="M 2 10.923 L 20 10.923"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={BLACK}
        variants={{
          closed: { d: 'M 2 17.846 L 20 17.846' },
          open: { d: 'M 4 4 L 18 18' },
        }}
      />
    </svg>
  </BurgerButton>
);
