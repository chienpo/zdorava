import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { I18n } from '@lingui/react';

import {
  PageLinkStyled,
  Text,
  LinkMirrorEffectBox,
  LinkOverlayMirrorEffect,
  MotionLinkOverlay,
} from './styled';
import { PAGE_TITLES } from '../../../../constants/page-titles';

interface Props {
  position: string;
  routeName: string;
  title: any;
}

export const PageLinkFadeView = ({ title, position, routeName }: Props) => {
  const [overlayVisible, showOverlay] = useState(false);

  return (
    <>
      <AnimatePresence initial={false}>
        {overlayVisible && (
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>

      <I18n>
        {({ i18n }) => (
          <PageLinkStyled
            title={i18n._(PAGE_TITLES[routeName])}
            onMouseEnter={() => showOverlay(true)}
            onBlur={() => showOverlay(false)}
            onFocus={() => showOverlay(true)}
            onMouseOver={() => showOverlay(true)}
            onMouseOut={() => showOverlay(false)}
            routeName={routeName}
          >
            <LinkMirrorEffectBox>
              <Text>{title}</Text>
            </LinkMirrorEffectBox>
          </PageLinkStyled>
        )}
      </I18n>
    </>
  );
};
