import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Route, Router } from 'router5';

import { DARK_MODE } from '~/constants/theme';
import { BLACK_90, WHITE_20 } from '~/constants/colors';
import { SOCIAL_LINKS_DATA } from '~/constants/social';
import { Backdrop } from '~/ui/backdrop';
import { AnimatedDiv } from '~/animations/animated';
import { MenuToggleButtonView } from './menu-toggle-button-view';
import { MenuListView } from './menu-list-view';
import { SidebarSocial, StyledSocialLink } from './styled';

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
  routes: Route[];
  router: Router;
}

const StyledMotionNavWrapper = styled(AnimatedDiv)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 100%;
`;

const StyledMotionMenuBackdrop = styled(AnimatedDiv)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 320px;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE ? WHITE_20 : BLACK_90};
`;

const NavStyled = styled.nav`
  width: 100%;
  margin-top: 100px;
  padding: 25px 15px;
`;

const sidebar = {
  open: (height = 1080) => ({
    clipPath: `polygon(0px 0px, 320px 0px, 320px ${height}px, 0px ${height}px)`,
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
      delay: 0.4,
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
  routes,
  router,
}) => (
  <StyledMotionNavWrapper initial="closed" animate={isOpen ? 'open' : 'closed'}>
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop onClick={toggleOpen} />
          <StyledMotionMenuBackdrop
            initial="closed"
            exit="closed"
            variants={sidebar}
          >
            <NavStyled>
              <MenuListView
                toggleOpen={toggleOpen}
                routes={routes}
                router={router}
              />
            </NavStyled>
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
                <StyledSocialLink
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener"
                >
                  <FontAwesomeIcon icon={icon} />
                </StyledSocialLink>
              ))}
            </SidebarSocial>
          </StyledMotionMenuBackdrop>
        </>
      )}
    </AnimatePresence>

    <MenuToggleButtonView onClick={toggleOpen} />
  </StyledMotionNavWrapper>
);
