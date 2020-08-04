import React, { useState, useEffect, lazy, Suspense } from 'react';

import { GlitchContainer, LazyGlitchBackground } from './styled';

const GlitchEffect = lazy(() => import('react-glitch-effect').then(mod => mod));

const GlitchBox = (props: any) => {
  const { className, children } = props;

  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <GlitchEffect {...props} />
    </Suspense>
  );
};

interface Props {
  src: string;
  srcSet: string;
}

export const HomepageGlitch: React.FC<Props> = ({ src, srcSet }) => {
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
      <GlitchBox duration="2s" iterationCount="infinite" disabled={disabled}>
        <LazyGlitchBackground src={src} srcSet={srcSet} alt="Homepage glitch" />
      </GlitchBox>
    </GlitchContainer>
  );
};
