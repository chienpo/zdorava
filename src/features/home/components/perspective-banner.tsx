import React, { FC } from 'react';

import { HomepageGlitch } from './homepage-glitch';

export const PerspectiveBanner: FC<{ src: string; srcSet: string }> = ({
  src,
  srcSet,
}) => (
  <div
    style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      background: 'transparent',
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
          right: '0',
          bottom: '0',
        }}
      >
        <HomepageGlitch src={src} srcSet={srcSet} />
      </div>
    </div>
  </div>
);
