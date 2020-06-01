import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { Route } from 'models/route.model';

import { DARK_MODE } from 'app/constants/theme';
import { BLACK_90, WHITE_20 } from 'app/constants/colors';
import { MenuToggleButtonView } from './menu-toggle-button-view';
import { MenuListView } from './menu-list-view';
import { MenuBackdropView } from './menu-backdrop-view';

interface RefObject {
  current: null | HTMLElement;
}

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
  height: number;
  routes: Route[];
  router: any;
  containerRef: RefObject;
}

const StyledMotionMenuBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  margin: 10px;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE ? WHITE_20 : BLACK_90};
`;

const sidebar = {
  open: (height = 1080) => ({
    clipPath: `polygon(0px 0px, 300px 0px, 300px ${height}px, 0px ${height}px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
    backgroundColor: 'rgba(255,255,255,1)',
  }),
  closed: {
    clipPath: 'polygon(0px 0px, 60px 0px, 60px 55px, 0px 55px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
    backgroundColor: 'rgba(0,0,0,0)',
  },
};

export const BurgerMenuView: React.FC<Props> = ({
  isOpen,
  toggleOpen,
  containerRef,
  height,
  routes,
  router,
}) => (
  <motion.nav
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    custom={height}
    ref={containerRef}
  >
    <AnimatePresence>
      {isOpen && <MenuBackdropView toggleOpen={toggleOpen} />}
    </AnimatePresence>

    <StyledMotionMenuBackdrop variants={sidebar} />
    <MenuListView routes={routes} router={router} />
    <MenuToggleButtonView isOpen={isOpen} toggle={toggleOpen} />
  </motion.nav>
);
