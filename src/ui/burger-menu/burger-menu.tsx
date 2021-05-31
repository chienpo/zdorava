import React, { FC } from 'react';
import { AnimatePresence, useCycle } from 'framer-motion';
import { useRoute } from 'react-router5';
import { Route } from 'router5';

import { useStore } from 'effector-react';
import { AnimatedDiv } from '~/animations/animated';
import { SocialLinks } from '~/ui/social-links';
import { Backdrop } from '~/ui/backdrop';
import { BurgerMenuButton } from './burger-menu-button';
import { BurgerMenuNav } from './burger-menu-nav';
import { $languageStore } from '~/store/language-store';
import { SOCIAL_LINKS_DATA } from '~/constants/social';
import {
  SocialLinksAnimatedWrapper,
  StyledMotionNavWrapper,
  StyledMotionMenuBackdrop,
} from './styled';

interface Props {
  routes: Route[];
  showMenu: boolean;
}

export const BurgerMenu: FC<Props> = ({ routes, showMenu }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { router } = useRoute();
  const language = useStore($languageStore);

  return (
    <StyledMotionNavWrapper
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop onClick={toggleOpen} />
            <StyledMotionMenuBackdrop
              initial="closed"
              exit="closed"
              variants={{
                open: (height = 1080) => ({
                  clipPath: `polygon(0px 0px, 320px 0px, 320px ${height}vh, 0px ${height}vh)`,
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
              }}
            >
              <BurgerMenuNav
                toggleOpen={toggleOpen}
                routes={routes}
                router={router}
              />
              <SocialLinksAnimatedWrapper
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
                <SocialLinks data={SOCIAL_LINKS_DATA(language)} />
              </SocialLinksAnimatedWrapper>
            </StyledMotionMenuBackdrop>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <AnimatedDiv
          initial="closed"
          exit="closed"
          variants={{
            open: { opacity: showMenu ? 1 : 0 },
            closed: { opacity: showMenu ? 1 : 0 },
          }}
        >
          {showMenu && <BurgerMenuButton onClick={toggleOpen} />}
        </AnimatedDiv>
      </AnimatePresence>
    </StyledMotionNavWrapper>
  );
};
