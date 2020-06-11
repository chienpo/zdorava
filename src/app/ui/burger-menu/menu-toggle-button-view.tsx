import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BLACK } from 'constants/colors';

const BurgerButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

interface PathInterface {
  variants: {
    open: {
      d?: string;
      opacity?: number;
    };
    closed: {
      d?: string;
      opacity?: number;
    };
  };
  d?: string;
  transition?: { [key: string]: number };
  stroke: string;
}

const Path: React.FC<PathInterface> = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="square"
    {...props}
  />
);

export const MenuToggleButtonView: React.FC<{
  toggle: () => void;
  isOpen: boolean;
}> = ({ toggle, isOpen }) => (
  <BurgerButton type="button" onClick={toggle}>
    <svg width="45" height="45" viewBox="0 0 23 23" color="white">
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
