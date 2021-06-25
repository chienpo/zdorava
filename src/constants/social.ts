import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Languages } from '~/constants/languages';
import * as env from '~/env';

export const SOCIAL_LINKS_DATA = (locale: string) => {
  const LOCALES: { [key: string]: string } = {
    [Languages.En]: 'en_US',
    [Languages.Pl]: 'pl_PL',
    [Languages.Ru]: 'en_US',
  };

  return [
    {
      title: 'GitHub',
      path: `${env.SOCIAL_GITHUB_PATH}`,
      icon: faGithub,
    },
    {
      title: 'LinkedIn',
      path: `${env.SOCIAL_LINKEDIN_PATH}?locale=${LOCALES[locale]}`,
      icon: faLinkedin,
    },
  ];
};
