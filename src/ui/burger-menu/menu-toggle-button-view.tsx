import * as React from 'react';
import styled from 'styled-components';
import { MotionProps } from 'framer-motion';

import { BLACK, WHITE } from 'constants/colors';
import { AnimatedPath } from 'animations/animated';

const BurgerButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 17px;
  left: 17px;
  background: transparent;
`;

const Path: React.FC<
  MotionProps & {
    stroke: string;
    d?: string;
  }
> = props => (
  <AnimatedPath
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="square"
    {...props}
  />
);

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToggleButtonView: React.FC<Props> = ({ toggle, isOpen }) => (
  <BurgerButton aria-label="burger-menu-button" type="button" onClick={toggle}>
    <svg width="45" height="45" viewBox="0 0 23 23" color={WHITE}>
      <Path
        stroke={isOpen ? BLACK : BLACK}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        stroke={isOpen ? BLACK : BLACK}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={isOpen ? BLACK : BLACK}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </BurgerButton>
);
