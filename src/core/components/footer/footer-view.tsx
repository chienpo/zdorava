import React, { lazy, Suspense, FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import { SITE_PUBLICATION_YEAR } from '~/constants/site';
import { SITE_NAME } from '~/constants/constants';
import { AnimatedFooter } from '~/animations/animated/animated';
import { FooterWrapper, SocialLinksStyled, FooterCopy } from './styled';

const Contacts = lazy(() => import('~/features/contacts'));

interface Props {
  toggleContactForm: (prevState: boolean) => void;
  contactFormOpened: boolean;
}

export const FooterView: FC<Props> = ({
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
        <SocialLinksStyled>
          {/* TODO: Hide contactForm feature */}
          {/* <ContactFormTrigger toggleContactForm={toggleContactForm} /> */}
        </SocialLinksStyled>
        <FooterCopy>
          © ${SITE_NAME} &nbsp;
          {SITE_PUBLICATION_YEAR}
        </FooterCopy>
      </FooterWrapper>
    </AnimatePresence>
  </AnimatedFooter>
);
