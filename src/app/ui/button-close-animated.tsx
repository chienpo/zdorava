import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BLACK, RED, WHITE } from 'app/constants/colors';

const BurgerMotionButton = styled(motion.button)`
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  background: transparent;
  display: flex;

  path {
    transition: stroke 0.2s;
  }

  &:hover {
    path {
      stroke: ${RED};
    }
  }
`;

interface PathInterface {
  variants: {
    open: {
      d: string;
      strokeWidth?: number;
      transition?: {
        delay?: number;
      };
    };
    closed: {
      d: string;
      strokeWidth?: number;
      transition?: {
        delay?: number;
      };
    };
  };
  d?: string;
  stroke: string;
}

interface Props {
  clicked: () => void;
}

const Path: React.FC<PathInterface> = props => (
  <motion.path fill="transparent" strokeLinecap="square" {...props} />
);

export const ButtonCloseAnimated: React.FC<Props> = ({ clicked }) => (
  <BurgerMotionButton
    initial="closed"
    animate="open"
    exit="closed"
    type="button"
    onClick={clicked}
    whileTap={{ scale: 1.1 }}
  >
    <svg width="40" height="40" viewBox="0 0 20 20" color={WHITE}>
      <Path
        stroke={BLACK}
        variants={{
          open: {
            d: 'M 3 16.5 L 17 2.5',
            strokeWidth: 2,
            transition: { delay: 0.4 },
          },
          closed: { d: 'M 3 16.5 L 17 2.5', strokeWidth: 0 },
        }}
      />
      <Path
        stroke={BLACK}
        variants={{
          open: {
            d: 'M 3 2.5 L 17 16.346',
            strokeWidth: 2,
            transition: { delay: 0.4 },
          },
          closed: { d: 'M 3 2.5 L 17 16.346', strokeWidth: 0 },
        }}
      />
    </svg>
  </BurgerMotionButton>
);
