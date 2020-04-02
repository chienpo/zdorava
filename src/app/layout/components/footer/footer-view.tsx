import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { SOCIAL_GITHUB_PATH, SOCIAL_LINKED_IN_PATH } from 'app/constants/social';
import { WEBSITE_PUBLICATION_YEAR } from 'app/constants/site';
import { FooterWrapper, FooterNav, FooterCopy, FooterSocialLink } from './styled';

export const FooterView = () => {
  const footerNavigationLinks = [
    {path: SOCIAL_GITHUB_PATH, icon: faGithub},
    {path: SOCIAL_LINKED_IN_PATH, icon: faLinkedin},
    {path: null, icon: faPhone},
  ];

  return (
    <FooterWrapper>
      <FooterNav>
        {footerNavigationLinks.map(({ path, icon }) => path ? (
          <FooterSocialLink
            href={path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
          </FooterSocialLink>
        ) : (
          <FooterSocialLink
            as="button"
          >
            <FontAwesomeIcon icon={icon} />
          </FooterSocialLink>
        ))}
      </FooterNav>
      <FooterCopy>
        © Stefan Lagunovsky
        {WEBSITE_PUBLICATION_YEAR}
      </FooterCopy>
    </FooterWrapper>
  )
};
