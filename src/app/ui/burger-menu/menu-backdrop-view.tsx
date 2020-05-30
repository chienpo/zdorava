import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <Backdrop
        key="MenuBackdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleOpen}
      />
    </AnimatePresence>
  );
};
