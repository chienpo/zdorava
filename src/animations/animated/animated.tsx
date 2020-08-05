import React, { Suspense, lazy, FC, RefObject } from 'react';
import { MotionProps } from 'framer-motion';

// TODO: Create helper to load motion elements to avoid code duplication
const MotionDiv = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.div,
  }))
);

const MotionHeader = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.header,
  }))
);

const MotionFooter = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.footer,
  }))
);

const MotionUl = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.ul,
  }))
);

const MotionLi = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.li,
  }))
);

const MotionAddress = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.address,
  }))
);

const MotionPath = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.path,
  }))
);

const MotionSection = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.section,
  }))
);

const MotionFigure = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.figure,
  }))
);

interface Props {
  className?: string;
  onClick?: () => void;
  ref?: RefObject<any>;
}

interface SvgPathProps extends Props, MotionProps {
  fill?: string;
  strokeWidth?: string;
  strokeLinecap?: 'round' | 'square';
}

// TODO: Create helper, MotionProps & Props | SvgPathProps | ... to avoid code duplication
export const AnimatedDiv: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<div className={className}>{children}</div>}>
    <MotionDiv className={className} {...props}>
      {children}
    </MotionDiv>
  </Suspense>
);

export const AnimatedHeader: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<header className={className}>{children}</header>}>
    <MotionHeader className={className} {...props}>
      {children}
    </MotionHeader>
  </Suspense>
);

export const AnimatedFooter: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<footer className={className}>{children}</footer>}>
    <MotionFooter className={className} {...props}>
      {children}
    </MotionFooter>
  </Suspense>
);

export const AnimatedUl: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<ul className={className}>{children}</ul>}>
    <MotionUl className={className} {...props}>
      {children}
    </MotionUl>
  </Suspense>
);

export const AnimatedLi: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<li className={className}>{children}</li>}>
    <MotionLi className={className} {...props}>
      {children}
    </MotionLi>
  </Suspense>
);

export const AnimatedAddress: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<address className={className}>{children}</address>}>
    <MotionAddress className={className} {...props}>
      {children}
    </MotionAddress>
  </Suspense>
);

export const AnimatedPath: FC<SvgPathProps> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<path className={className}>{children}</path>}>
    <MotionPath className={className} {...props}>
      {children}
    </MotionPath>
  </Suspense>
);

export const AnimatedSection: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<section className={className}>{children}</section>}>
    <MotionSection className={className} {...props}>
      {children}
    </MotionSection>
  </Suspense>
);

export const AnimatedFigure: FC<MotionProps & Props> = ({
  className,
  children,
  ...props
}) => (
  <Suspense fallback={<figure className={className}>{children}</figure>}>
    <MotionFigure className={className} {...props}>
      {children}
    </MotionFigure>
  </Suspense>
);
