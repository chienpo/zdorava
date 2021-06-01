import React, { FC } from 'react';
import { LazyMotion, m, MotionProps, domMax } from 'framer-motion';

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
  <LazyMotion features={domMax}>
    <m.main {...props} />
  </LazyMotion>
);

export const AnimatedDiv: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.div {...props} />
  </LazyMotion>
);

export const AnimatedHeader: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.header {...props} />
  </LazyMotion>
);

export const AnimatedFooter: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.footer {...props} />
  </LazyMotion>
);

export const AnimatedUl: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.ul {...props} />
  </LazyMotion>
);

export const AnimatedLi: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.li {...props} />
  </LazyMotion>
);

export const AnimatedAddress: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.address {...props} />
  </LazyMotion>
);

export const AnimatedPath: FC<SvgPathProps> = (props) => (
  <LazyMotion features={domMax}>
    <m.path {...props} />
  </LazyMotion>
);

export const AnimatedSection: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.section {...props} />
  </LazyMotion>
);

export const AnimatedFigure: FC<MotionProps & Props> = (props) => (
  <LazyMotion features={domMax}>
    <m.figure {...props} />
  </LazyMotion>
);
