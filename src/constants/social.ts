import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Languages } from '~/constants/languages';

const SOCIAL_GITHUB_PATH = 'https://github.com/stepan-lagunovsky/';
const SOCIAL_LINKEDIN_PATH = 'https://www.linkedin.com/in/stepan-lagunovsky/';

export const SOCIAL_LINKS_DATA = (locale: string) => {
  const LOCALES: { [key: string]: string } = {
    [Languages.En]: 'en_US',
    [Languages.Pl]: 'pl_PL',
    [Languages.Ru]: 'en_US',
  };

  return [
    {
      title: 'GitHub',
      path: SOCIAL_GITHUB_PATH,
      icon: faGithub,
    },
    {
      title: 'LinkedIn',
      path: `${SOCIAL_LINKEDIN_PATH}?locale=${LOCALES[locale]}`,
      icon: faLinkedin,
    },
  ];
};
