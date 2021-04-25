import React, { FC, PropsWithChildren } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from 'effector-react';
import { Address } from './styled';
import { SOCIAL_LINKS_DATA } from '~/constants/social';

import { Anchor } from '~/ui/anchor';
import { $languageStore } from '~/store/language-store';

interface Props {
  className?: string;
}

export const SocialLinks: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  const language = useStore($languageStore);

  return (
    <Address className={className}>
      {SOCIAL_LINKS_DATA(language).map(({ path, icon, title }) => (
        <Anchor key={title} href={path} aria-label={title}>
          <FontAwesomeIcon icon={icon} />
        </Anchor>
      ))}
      {children}
    </Address>
  );
};
