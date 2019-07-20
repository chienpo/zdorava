import React from 'react';
import GlitchEffect from 'react-glitch-effect';

import { GlitchContainer, GlitchBackground } from './styled';

export const HomepageGlitch = () => (
  <GlitchContainer>
    <GlitchEffect duration="2s">
      <GlitchBackground />
    </GlitchEffect>
  </GlitchContainer>
);
