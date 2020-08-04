import React, { FC } from 'react';
import styled from 'styled-components';

import { useKeyPress } from 'hooks/use-key-press';
import { BLACK_20 } from 'constants/colors';
import { KEY_CODE_ESCAPE } from 'constants/key-codes';
import { AnimatedDiv } from 'animations/animated';

interface Props {
  onClick: () => void;
  fixed?: boolean;
}

const MotionBackdrop = styled(AnimatedDiv)`
  left: 0;
  right: 0;
  background: ${BLACK_20};
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
`;

export const Backdrop: FC<Props> = ({ onClick, fixed = true }) => {
  useKeyPress(KEY_CODE_ESCAPE, onClick);

  const fixedStyles: { [key: string]: string } | {} = {
    position: 'fixed',
    height: '100vh',
  };

  return (
    <MotionBackdrop
      style={fixed ? fixedStyles : {}}
      variants={{
        initial: {
          opacity: 0,
          transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
          },
        },
        open: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
        closed: {
          opacity: 0,
          transition: {
            delay: 1,
            type: 'spring',
            stiffness: 100,
          },
        },
      }}
      initial="initial"
      animate="open"
      exit="closed"
      onClick={onClick}
    />
  );
};
