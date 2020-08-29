import React, { Suspense, FC, RefObject, ReactNode } from 'react';
import { MotionProps } from 'framer-motion';

import { lazyLib } from '~/utils/lazy-lib';

const MotionDiv = lazyLib(() => import('framer-motion'), 'motion.div');
const MotionHeader = lazyLib(() => import('framer-motion'), 'motion.header');
const MotionFooter = lazyLib(() => import('framer-motion'), 'motion.footer');
const MotionUl = lazyLib(() => import('framer-motion'), 'motion.ul');
const MotionLi = lazyLib(() => import('framer-motion'), 'motion.li');
const MotionAddress = lazyLib(() => import('framer-motion'), 'motion.address');
const MotionPath = lazyLib(() => import('framer-motion'), 'motion.path');
const MotionSection = lazyLib(() => import('framer-motion'), 'motion.section');
const MotionFigure = lazyLib(() => import('framer-motion'), 'motion.figure');

interface Props {
  className?: string;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement | unknown>;
}

interface SvgPathProps extends Props, MotionProps {
  fill?: string;
  strokeWidth?: string;
  strokeLinecap?: 'round' | 'square';
}

interface SuspenseComponentProps {
  animCmp: FC;
  fallbackTag: string;
  children?: ReactNode;
  className?: string;
}

const SuspenseComponent: React.FC<SuspenseComponentProps> = ({
  animCmp: Comp,
  fallbackTag,
  ...props
}) => {
  const { className, children } = props;

  const FbComp: React.FC<{ className?: string }> = (fbProps) =>
    React.createElement(fallbackTag, fbProps);

  return (
    <Suspense fallback={<FbComp className={className}>{children}</FbComp>}>
      <Comp className={className} {...props}>
        {children}
      </Comp>
    </Suspense>
  );
};

export const AnimatedDiv: FC<MotionProps & Props> = (props) => (
  <SuspenseComponent animCmp={MotionDiv} fallbackTag="div" {...props} />
);

export const AnimatedHeader: FC<MotionProps & Props> = (props) => (
  <SuspenseComponent animCmp={MotionHeader} fallbackTag="header" {...props} />
);

export const AnimatedFooter: FC<MotionProps & Props> = (props) => (
  <SuspenseComponent animCmp={MotionFooter} fallbackTag="footer" {...props} />
);

export const AnimatedUl: FC<MotionProps & Props> = (props) => (
  <SuspenseComponent animCmp={MotionUl} fallbackTag="ul" {...props} />
);

export const AnimatedLi: FC<MotionProps & Props> = (props) => (
  <SuspenseComponent animCmp={MotionLi} fallbackTag="li" {...props} />
);

export const AnimatedAddress: FC<MotionProps & Props> = (props) => (
  <SuspenseComponent animCmp={MotionAddress} fallbackTag="address" {...props} />
);

export const AnimatedPath: FC<SvgPathProps> = (props) => (
  <MotionPath animCmp={MotionPath} fallbackTag="path" {...props} />
);

export const AnimatedSection: FC<MotionProps & Props> = (props) => (
  <MotionSection animCmp={MotionPath} fallbackTag="section" {...props} />
);

export const AnimatedFigure: FC<MotionProps & Props> = (props) => (
  <MotionSection animCmp={MotionFigure} fallbackTag="figure" {...props} />
);
