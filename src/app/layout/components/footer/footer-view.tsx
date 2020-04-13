import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { SOCIAL_GITHUB_PATH, SOCIAL_LINKED_IN_PATH } from 'app/constants/social';
import { SITE_PUBLICATION_YEAR } from 'app/constants/site';
import { Contacts } from 'app/features/contacts';
import { FooterWrapper, FooterNav, FooterCopy, FooterSocialLink } from './styled';

interface Props {
  toggleContactForm: (prevState: any) => void;
  contactFormOpened: boolean;
}

export const FooterView = ({ toggleContactForm, contactFormOpened }: Props) => {
  const footerNavigationLinks = [
    {name: 'github', path: SOCIAL_GITHUB_PATH, icon: faGithub},
    {name: 'linkedin', path: SOCIAL_LINKED_IN_PATH, icon: faLinkedin},
  ];

  return (
    <>
      <Contacts
        opened={contactFormOpened}
        onClose={() => toggleContactForm((prevState: boolean) => !prevState)}
      />
      <FooterWrapper>
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
          <FooterSocialLink
            onClick={() => {
              return toggleContactForm((prevState: boolean) => !prevState)
            }}
            key="contacts"
            as="button"
          >
            <FontAwesomeIcon icon={faPhone} />
          </FooterSocialLink>
        </FooterNav>
        <FooterCopy>
          ©
          Zdorava
          &nbsp;
          {SITE_PUBLICATION_YEAR}
        </FooterCopy>
      </FooterWrapper>
    </>
  )
};
