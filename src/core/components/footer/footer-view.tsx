import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

import { SOCIAL_LINKS_DATA } from 'constants/social';
import { SITE_PUBLICATION_YEAR } from 'constants/site';
import { ROUTE_NAME_HOME } from 'router/routes';
import { RED } from 'constants/colors';
import { Contacts } from 'features/contacts';
import {
  FooterWrapper,
  FooterNav,
  FooterCopy,
  FooterSocialLink,
} from './styled';

interface Props {
  toggleContactForm: (prevState: boolean) => void;
  contactFormOpened: boolean;
  theme: string;
  activeRouteName: string;
}

const variants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

const homePageVariants = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  enter: {
    x: '0%',
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    x: '0%',
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

export const FooterView: React.FC<Props> = ({
  toggleContactForm,
  contactFormOpened,
  theme,
  activeRouteName,
}) => {
  return (
    <>
      <Contacts
        opened={contactFormOpened}
        onClose={() => toggleContactForm(false)}
      />
      <motion.div animate="enter" exit="exit">
        <AnimatePresence>
          <FooterWrapper
            theme={theme}
            initial="initial"
            variants={
              activeRouteName === ROUTE_NAME_HOME ? homePageVariants : variants
            }
          >
            <FooterNav>
              {SOCIAL_LINKS_DATA.map(({ path, icon, name, attrs }) => (
                <FooterSocialLink key={name} href={path} {...attrs}>
                  <FontAwesomeIcon icon={icon} />
                </FooterSocialLink>
              ))}
              <FooterSocialLink
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
      </motion.div>
    </>
  );
};
