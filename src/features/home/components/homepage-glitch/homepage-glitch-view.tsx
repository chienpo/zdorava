import React, { useState, useEffect, Suspense } from 'react';

import lazyLib from 'utils/lazy-lib';
import { GlitchContainer, LazyGlitchBackground } from './styled';

const GlitchEffect = lazyLib(() => import('react-glitch-effect'));

interface Props {
  src: string;
  srcSet: string;
}

export const HomepageGlitchView: React.FC<Props> = ({ src, srcSet }) => {
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
      <Suspense fallback={<div />}>
        <GlitchEffect
          duration="2s"
          iterationCount="infinite"
          disabled={disabled}
        >
          <LazyGlitchBackground
            src={src}
            srcSet={srcSet}
            alt="Homepage glitch"
          />
        </GlitchEffect>
      </Suspense>
    </GlitchContainer>
  );
};
