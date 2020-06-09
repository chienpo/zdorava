import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { Route } from 'models/route.model';

import { DARK_MODE } from 'app/constants/theme';
import { BLACK, BLACK_90, WHITE_20 } from 'app/constants/colors';
import { PHONE } from 'app/constants/social';
import { Backdrop } from 'app/ui/backdrop';
import { MenuToggleButtonView } from './menu-toggle-button-view';
import { MenuListView } from './menu-list-view';
import { SidebarSocial, StyledMotionSocialLink } from './styled';

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
  <StyledMotionNav
    initial="closed"
    animate={isOpen ? 'open' : 'closed'}
    custom={height}
    ref={containerRef}
    style={{ width: isOpen ? '100%' : 'auto' }}
  >
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop onClick={toggleOpen} />

          <StyledMotionMenuBackdrop variants={sidebar} />
          <MenuListView routes={routes} router={router} />

          <SidebarSocial
            variants={{
              initial: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
              open: {
                y: 0,
                opacity: 1,
                transition: {
                  y: { stiffness: 1000, velocity: -100 },
                  delay: 0.8,
                },
              },
              closed: {
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              },
            }}
            initial="initial"
            animate="open"
            exit="closed"
          >
            <StyledMotionSocialLink href={`tel:${PHONE}`}>
              <FontAwesomeIcon icon={faPhone} style={{ color: BLACK }} />
              &nbsp;+375 (44) 721-37-70
            </StyledMotionSocialLink>
          </SidebarSocial>
        </>
      )}
    </AnimatePresence>

    <MenuToggleButtonView isOpen={isOpen} toggle={toggleOpen} />
  </StyledMotionNav>
);
