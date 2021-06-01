import React, { FC, ReactNode, Suspense } from 'react';

interface SuspenseComponentProps {
  animCmp: FC;
  fallbackTag: string;
  children?: ReactNode;
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
