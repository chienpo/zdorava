import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Route } from 'models/route.model';

import { DARK_MODE } from 'app/constants/theme';
import { BLACK_90, WHITE_20, BLACK_50 } from 'app/constants/colors';
import { MenuToggleButtonView } from './menu-toggle-button-view';
import { MenuListView } from './menu-list-view';

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

const StyledMotionNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;

const StyledMotionMenuBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE ? WHITE_20 : BLACK_90};
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Backdrop = styled(motion.div)`
  backdrop-filter: blur(5px);
  background: ${BLACK_50};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const BurgerMenuView: React.FC<Props> = ({
  isOpen,
  toggleOpen,
  containerRef,
  height,
  routes,
  router,
}) => (
  <StyledMotionNav
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    custom={height}
    ref={containerRef}
  >
    <Backdrop variants={variants} />
    <StyledMotionMenuBackdrop variants={sidebar} />
    <MenuListView routes={routes} router={router} />
    <MenuToggleButtonView toggle={() => toggleOpen()} />
  </StyledMotionNav>
);
