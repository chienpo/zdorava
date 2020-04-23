import { createElement } from 'react';

import { AboutView } from './about-view';

const About = ({ poseKey }: any) => {
  return createElement(AboutView, { poseKey })
};

// eslint-disable-next-line import/no-default-export
export default About;
