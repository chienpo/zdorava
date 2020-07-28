import { createElement } from 'react';

import aboutLogo1 from 'assets/images/selfies/1-320x320.png';
import aboutLogo2 from 'assets/images/selfies/2-320x320.png';
import aboutLogo3 from 'assets/images/selfies/3-320x320.png';
import aboutLogo4 from 'assets/images/selfies/4-320x320.png';
import aboutLogo5 from 'assets/images/selfies/centered-320x320.png';
import aboutLogo6 from 'assets/images/selfies/5-320x320.png';
import aboutLogo7 from 'assets/images/selfies/6-320x320.png';
import aboutLogo8 from 'assets/images/selfies/7-320x320.png';
import aboutLogo9 from 'assets/images/selfies/8-320x320.png';
import { AboutLogoView } from './about-logo-view';

export const AboutLogo = () => {
  const logos = [
    { left: 150, top: -250, alt: 'About logo 1', src: aboutLogo1 },
    { left: -270, top: 170, alt: 'About logo 2', src: aboutLogo2 },
    { left: 220, top: -220, alt: 'About logo 3', src: aboutLogo3 },
    { left: 720, top: 720, alt: 'About logo 4', src: aboutLogo4 },
    { left: -420, top: 120, alt: 'Hello logo', src: aboutLogo5 },
    { left: -220, top: 220, alt: 'About logo 6', src: aboutLogo6 },
    { left: 220, top: -120, alt: 'About logo 7', src: aboutLogo7 },
    { left: -620, top: 620, alt: 'About logo 8', src: aboutLogo8 },
    { left: -620, top: 620, alt: 'About logo 9', src: aboutLogo9 },
  ];

  return createElement(AboutLogoView, {
    logos,
  });
};
