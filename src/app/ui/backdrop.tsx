import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { BLACK_20 } from 'constants/colors';
import { useKeyPress } from 'hooks/use-key-press';
import { KEY_CODE_ESCAPE } from 'constants/key-codes';

interface Props {
  onClick: () => void;
}

const MotionBackdrop = styled(motion.div)`
  position: fixed;
  height: 100vh;
  left: 0;
  right: 0;
  background: ${BLACK_20};
`;

export const Backdrop: FC<Props> = ({ onClick }) => {
  useKeyPress(KEY_CODE_ESCAPE, onClick);

  return (
    <MotionBackdrop
      variants={{
        initial: {
          opacity: 0,
          transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
          },
          backdropFilter: 'blur(0px)',
        },
        open: {
          opacity: 1,
          transition: { duration: 0.2 },
          backdropFilter: 'blur(3px)',
        },
        closed: {
          opacity: 0,
          transition: {
            delay: 1,
            type: 'spring',
            stiffness: 100,
          },
          backdropFilter: 'blur(0px)',
        },
      }}
      initial="initial"
      animate="open"
      exit="closed"
      onClick={onClick}
    />
  );
};
