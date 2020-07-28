import React, { useState, useEffect } from 'react';
import GlitchEffect from 'react-glitch-effect';

import homepageGlitchBackground from 'assets/images/backgrounds/homepage-background.png';
import { GlitchContainer, LazyGlitchBackground } from './styled';

export const HomepageGlitch = () => {
  const [disabled, toggleDisabled] = useState(true);

  useEffect(() => {
    const setGlitchIntervalOn = setInterval(() => {
      toggleDisabled(false);
    }, 6000);

    return () => {
      clearInterval(setGlitchIntervalOn);
    };
  }, [toggleDisabled]);

  useEffect(() => {
    let setGlitchIntervalOn: ReturnType<typeof setTimeout>;

    if (!disabled) {
      setGlitchIntervalOn = setTimeout(() => toggleDisabled(true), 2000);
    }

    return () => {
      clearInterval(setGlitchIntervalOn);
    };
  }, [disabled]);

  return (
    <GlitchContainer>
      <GlitchEffect duration="2s" iterationCount="infinite" disabled={disabled}>
        <LazyGlitchBackground
          src={homepageGlitchBackground}
          srcSet={homepageGlitchBackground}
          alt="Homepage glitch"
        />
      </GlitchEffect>
    </GlitchContainer>
  );
};
