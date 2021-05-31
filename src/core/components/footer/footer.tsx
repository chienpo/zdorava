import React, { lazy, Suspense, FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useStore } from 'effector-react';

import { SITE_PUBLICATION_YEAR } from '~/constants/site';
import { SITE_NAME } from '~/constants/constants';
import { AnimatedFooter } from '~/animations/animated/animated';
import { FooterWrapper, SocialLinksStyled, FooterCopy } from './styled';
import { $languageStore } from '~/store/language-store';
import { SOCIAL_LINKS_DATA } from '~/constants/social';

const Contacts = lazy(() => import('~/features/contacts'));

export const Footer: FC = () => {
  const [contactFormOpened, toggleContactForm] = useState<boolean>(false);
  const language = useStore($languageStore);

  return (
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
          <SocialLinksStyled data={SOCIAL_LINKS_DATA(language)}>
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
};
