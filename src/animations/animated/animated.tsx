import React, { FC } from 'react';
import { LazyMotion, m, MotionProps } from 'framer-motion';

const loadFeatures = () =>
  import('./features').then((response) => response.default);

interface Props {
  className?: string;
  onClick?: () => void;
  title?: string;
}

interface SvgPathProps extends Props, MotionProps {
  fill?: string;
  strokeWidth?: string;
  strokeLinecap?: 'round' | 'square';
}

export const AnimatedMain: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.main {...props} />
  </LazyMotion>
);

export const AnimatedDiv: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.div {...props} />
  </LazyMotion>
);

export const AnimatedHeader: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.header {...props} />
  </LazyMotion>
);

export const AnimatedFooter: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.footer {...props} />
  </LazyMotion>
);

export const AnimatedUl: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.ul {...props} />
  </LazyMotion>
);

export const AnimatedLi: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.li {...props} />
  </LazyMotion>
);

export const AnimatedAddress: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.address {...props} />
  </LazyMotion>
);

export const AnimatedPath: FC<SvgPathProps> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.path {...props} />
  </LazyMotion>
);

export const AnimatedSection: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.section {...props} />
  </LazyMotion>
);

export const AnimatedFigure: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={loadFeatures}>
    <m.figure {...props} />
  </LazyMotion>
);
