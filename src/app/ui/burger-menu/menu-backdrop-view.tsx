import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useKeyPress } from 'hooks/use-key-press';
import { KEY_CODE_ESCAPE } from 'app/constants/key-codes';
import { BLACK_50 } from 'app/constants/colors';

interface Props {
  toggleOpen: () => void;
}

const Backdrop = styled(motion.div)`
  backdrop-filter: blur(3px);
  background: ${BLACK_50};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const MenuBackdropView: React.FC<Props> = ({ toggleOpen }) => {
  useKeyPress(KEY_CODE_ESCAPE, toggleOpen);

  return (
    <Backdrop
      variants={{
        initial: {
          opacity: 0,
          transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
          },
        },
        show: { opacity: 1 },
        exit: {
          opacity: 0,
          transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
          },
        },
      }}
      initial="initial"
      animate="show"
      exit="exit"
      onClick={toggleOpen}
    />
  );
};
