import React, { FC, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Anchor } from '~/ui/anchor';
import { Address } from './styled';

type SocialLinkType = {
  title: string;
  path: string;
  icon: IconProp;
};

interface Props {
  className?: string;
  data: SocialLinkType[];
}

export const SocialLinks: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  data,
}) => (
  <Address className={className}>
    {data.map(({ path, icon, title }) => (
      <Anchor key={title} href={path} aria-label={title}>
        <FontAwesomeIcon icon={icon} />
      </Anchor>
    ))}
    {children}
  </Address>
);
