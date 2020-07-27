import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
  SOCIAL_GITHUB_PATH,
  SOCIAL_LINKED_IN_PATH,
  PHONE,
} from 'constants/social';
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
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1.5 },
  },
};

const homePageVariants = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  enter: {
    opacity: 1,
    x: '0%',
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: { duration: 1.5 },
  },
};

export const FooterView: React.FC<Props> = ({
  toggleContactForm,
  contactFormOpened,
  theme,
  activeRouteName,
}) => {
  const footerNavigationLinks = [
    { name: 'github', path: SOCIAL_GITHUB_PATH, icon: faGithub },
    { name: 'linkedin', path: SOCIAL_LINKED_IN_PATH, icon: faLinkedin },
  ];

  return (
    <>
      <Contacts
        opened={contactFormOpened}
        onClose={() => toggleContactForm(false)}
      />
      <FooterWrapper
        theme={theme}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={
          activeRouteName === ROUTE_NAME_HOME ? homePageVariants : variants
        }
      >
        <FooterNav>
          {footerNavigationLinks.map(({ path, icon, name }) => (
            <FooterSocialLink
              key={name}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={icon} />
            </FooterSocialLink>
          ))}
          <FooterSocialLink href={`tel:${PHONE}`}>
            <FontAwesomeIcon icon={faPhone} />
          </FooterSocialLink>
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
    </>
  );
};
