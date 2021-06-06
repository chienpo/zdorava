import React, { FC, Suspense } from 'react';

import { Children } from '~/lib/types';

interface SuspenseComponentProps {
  animCmp: FC;
  fallbackTag: string;
  children?: Children;
  className?: string;
}

export const SuspenseComponent: React.FC<SuspenseComponentProps> = ({
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
