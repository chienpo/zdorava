import * as React from 'react';
import { motion, MotionProps } from 'framer-motion';
import styled from 'styled-components';

import { BLACK, RED, WHITE } from '~/constants/colors';
import { AnimatedPath } from '~/animations/animated';

const BurgerMotionButton = styled(motion.button)`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;

  path {
    transition: stroke 0.2s;
  }

  &:hover {
    path {
      stroke: ${RED};
    }
  }
`;

interface Props {
  clicked: () => void;
}

const Path: React.FC<MotionProps & { stroke: string }> = props => (
  <AnimatedPath fill="transparent" strokeLinecap="square" {...props} />
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
