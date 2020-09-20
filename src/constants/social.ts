import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const SOCIAL_GITHUB_PATH = 'https://github.com/stepan-lagunovsky/';
const SOCIAL_LINKED_IN_PATH =
  'https://www.linkedin.com/in/stepan-lagunovsky-7a5479130/';
const PHONE = 'tel:+375 44 721-37-70';

export const SOCIAL_LINKS_DATA = [
  {
    name: 'GITHUB',
    path: SOCIAL_GITHUB_PATH,
    icon: faGithub,
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
  {
    name: 'LINKED_IN',
    path: SOCIAL_LINKED_IN_PATH,
    icon: faLinkedin,
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  },
  {
    name: 'PHONE',
    path: PHONE,
    icon: faPhone,
    attrs: {},
  },
];
