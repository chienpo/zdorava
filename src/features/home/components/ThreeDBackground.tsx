import React from 'react';

import Tilt from 'react-parallax-tilt';
import { HomepageGlitch } from './homepage-glitch';

export const ThreeDBackground = () => (
  <div
    style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      background:
        // 'linear-gradient(#1c9edc 50%, #a048b9 0%) 100%/50% 100% no-repeat, linear-gradient(#ee8c25 50%, #d14730 0%)',
        'transparent',
    }}
  >
    <div
      style={{
        overflow: 'hidden',
        height: '100vh',
        mixBlendMode: 'overlay',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <Tilt
          glareEnable
          glareMaxOpacity={1}
          glareColor="transparent"
          glarePosition="all"
          className="track-on-window"
          perspective={7000}
          trackOnWindow
          transitionSpeed={2500}
          tiltAxis="y"
          tiltReverse
        >
          <HomepageGlitch />
        </Tilt>
      </div>
    </div>
  </div>
);
