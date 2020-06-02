import { createElement } from 'react';

import { AboutView } from './about-view';

interface Props {
  poseKey: string;
}

const About = ({ poseKey }: Props) => {
  return createElement(AboutView, { poseKey });
};

// eslint-disable-next-line import/no-default-export
export default About;
