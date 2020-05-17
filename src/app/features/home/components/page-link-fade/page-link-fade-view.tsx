import React, { useState } from "react";
import { PoseGroup } from "react-pose";

import Tilt from "react-parallax-tilt";
import { PageLinkStyled, Text, LinkMirrorEffectBox, LinkOverlayMirrorEffect, LinkOverlayAnimated } from "./styled";

interface Props {
  position: string;
  routeName: string;
  children: any;
}

export const PageLinkFadeView = ({ children, position, ...props }: Props) => {
  const [overlayVisible, showOverlay] = useState(false);

  return (
    <>
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
        <PoseGroup>
          {overlayVisible && (
            <LinkOverlayAnimated key={position} title={position}>
              <LinkOverlayMirrorEffect />
            </LinkOverlayAnimated>
          )}
        </PoseGroup>
      </Tilt>

      <PageLinkStyled
        title={position}
        onMouseEnter={() => showOverlay(true)}
        onBlur={() => showOverlay(false)}
        onFocus={() => showOverlay(true)}
        onMouseOver={() => showOverlay(true)}
        onMouseOut={() => showOverlay(false)}
        {...props}
      >
        <LinkMirrorEffectBox>
          <Text title={position === 'left' ? 'next' : 'prev'}>
            {children}
          </Text>
        </LinkMirrorEffectBox>
      </PageLinkStyled>
    </>
  )
};
