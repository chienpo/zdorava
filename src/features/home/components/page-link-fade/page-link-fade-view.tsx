import React, { useState, ReactNode } from 'react';
import Tilt from 'react-parallax-tilt';
import { AnimatePresence } from 'framer-motion';
import { I18n } from '@lingui/react';

import { PAGE_TITLES } from '~/constants/page-titles';
import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { AnimatedDiv } from '~/animations/animated';
import {
  PageLinkStyled,
  Text,
  LinkMirrorEffectBox,
  LinkOverlayMirrorEffect,
  MotionLinkOverlay,
} from './styled';

interface Props {
  position: string;
  routeName: string;
  title: ReactNode;
  routeParams?: { [key: string]: string };
}

export const PageLinkFadeView = ({
  title,
  position,
  routeName,
  routeParams,
}: Props) => {
  const [overlayVisible, showOverlay] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {overlayVisible && (
          <AnimatedDiv
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Tilt
              key={position}
              glareEnable={false}
              glareMaxOpacity={0.9}
              glareColor="black"
              glarePosition="all"
              perspective={4500}
              trackOnWindow
              scale={1.15}
              transitionSpeed={2500}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
              tiltReverse
              tiltAxis="y"
            >
              <MotionLinkOverlay title={routeName}>
                <LinkOverlayMirrorEffect />
              </MotionLinkOverlay>
            </Tilt>
          </AnimatedDiv>
        )}
      </AnimatePresence>

      <I18n>
        {({ i18n }) => (
          <PageLinkStyled
            onMouseEnter={() => showOverlay(true)}
            onBlur={() => showOverlay(false)}
            onFocus={() => showOverlay(true)}
            onMouseOver={() => showOverlay(true)}
            onMouseOut={() => showOverlay(false)}
            routeName={routeName}
            routeParams={routeParams}
          >
            <LinkMirrorEffectBox>
              <Text
                title={i18n._(
                  routeName.includes(ROUTE_NAME_PORTFOLIO)
                    ? PAGE_TITLES[ROUTE_NAME_PORTFOLIO]
                    : PAGE_TITLES[routeName]
                )}
              >
                {title}
              </Text>
            </LinkMirrorEffectBox>
          </PageLinkStyled>
        )}
      </I18n>
    </>
  );
};
