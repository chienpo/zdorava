import { createElement } from 'react';

import aboutLogo1 from 'assets/images/selfies/1.jpg';
import aboutLogo2 from 'assets/images/selfies/2.jpg';
import aboutLogo3 from 'assets/images/selfies/3.jpg';
import aboutLogo4 from 'assets/images/selfies/4.jpg';
import aboutLogo5 from 'assets/images/selfies/centered.jpg';
import aboutLogo6 from 'assets/images/selfies/5.jpg';
import aboutLogo7 from 'assets/images/selfies/6.jpg';
import aboutLogo8 from 'assets/images/selfies/7.jpg';
import aboutLogo9 from 'assets/images/selfies/8.jpg';
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
