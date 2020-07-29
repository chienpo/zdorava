import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Route } from 'models/route.model';

import { DARK_MODE } from 'constants/theme';
import { BLACK, BLACK_90, WHITE_20 } from 'constants/colors';
import { SOCIAL_LINKS_DATA } from 'constants/social';
import { Backdrop } from 'ui/backdrop';
import { MenuToggleButtonView } from './menu-toggle-button-view';
import { MenuListView } from './menu-list-view';
import { SidebarSocial, StyledMotionSocialLink } from './styled';

interface RefObject {
  current: null | HTMLDivElement;
}

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
  height: number;
  routes: Route[];
  router: any;
  containerRef: RefObject;
}

const StyledMotionNavWrapper = styled(motion.div)`
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
  <StyledMotionNavWrapper
    initial="closed"
    animate={isOpen ? 'open' : 'closed'}
    custom={height}
    ref={containerRef}
    style={{ width: isOpen ? '300px' : '0', zIndex: 5 }}
  >
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop onClick={toggleOpen} />
          <StyledMotionMenuBackdrop
            initial="closed"
            exit="closed"
            variants={sidebar}
          />
          <MenuListView
            toggleOpen={toggleOpen}
            routes={routes}
            router={router}
          />
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
            {SOCIAL_LINKS_DATA.map(({ name, path, icon }) => (
              <StyledMotionSocialLink
                key={name}
                href={path}
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={icon} style={{ color: BLACK }} />
              </StyledMotionSocialLink>
            ))}
          </SidebarSocial>
        </>
      )}
    </AnimatePresence>

    <MenuToggleButtonView isOpen={isOpen} toggle={toggleOpen} />
  </StyledMotionNavWrapper>
);
