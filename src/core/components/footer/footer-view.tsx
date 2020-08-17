import React, { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';

import { SOCIAL_LINKS_DATA } from 'constants/social';
import { SITE_PUBLICATION_YEAR } from 'constants/site';
import { RED } from 'constants/colors';
import { AnimatedFooter } from 'animations/animated/animated';
import {
  FooterWrapper,
  FooterNav,
  FooterCopy,
  FooterSocialLink,
} from './styled';

const Contacts = React.lazy(() => import('features/contacts'));

interface Props {
  toggleContactForm: (prevState: boolean) => void;
  contactFormOpened: boolean;
}

export const FooterView: React.FC<Props> = ({
  toggleContactForm,
  contactFormOpened,
}) => (
  <AnimatedFooter animate="enter" exit="exit">
    <Suspense fallback={<div />}>
      <Contacts
        opened={contactFormOpened}
        onClose={() => toggleContactForm(false)}
      />
    </Suspense>
    <AnimatePresence>
      <FooterWrapper
        variants={{
          enter: {
            opacity: 1,
            transition: { duration: 0.4 },
          },
          exit: {
            opacity: 0,
            transition: { duration: 0 },
          },
        }}
      >
        <FooterNav>
          {SOCIAL_LINKS_DATA.map(({ path, icon, name, attrs }) => (
            <FooterSocialLink
              key={name}
              href={path}
              aria-label={name}
              {...attrs}
            >
              <FontAwesomeIcon icon={icon} />
            </FooterSocialLink>
          ))}
          <FooterSocialLink
            aria-label="contacts"
            onClick={() => toggleContactForm(true)}
            as="button"
            color={RED}
          >
            <FontAwesomeIcon
              style={{ position: 'absolute' }}
              icon={faEnvelope}
            />
          </FooterSocialLink>
        </FooterNav>
        <FooterCopy>
          © Zdorava &nbsp;
          {SITE_PUBLICATION_YEAR}
        </FooterCopy>
      </FooterWrapper>
    </AnimatePresence>
  </AnimatedFooter>
);
