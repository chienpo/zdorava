import aboutLogoPng1 from '~/assets/images/selfies/1-320x320.png';
import aboutLogoWebp1 from '~/assets/images/selfies/1-320x320.webp';
import aboutLogoPng2 from '~/assets/images/selfies/2-320x320.png';
import aboutLogoWebp2 from '~/assets/images/selfies/2-320x320.webp';
import aboutLogoPng3 from '~/assets/images/selfies/3-320x320.png';
import aboutLogoWebp3 from '~/assets/images/selfies/3-320x320.webp';
import aboutLogoPng4 from '~/assets/images/selfies/4-320x320.png';
import aboutLogoWebp4 from '~/assets/images/selfies/4-320x320.webp';
import aboutLogoCenteredPng from '~/assets/images/selfies/centered-320x320.png';
import aboutLogoCenteredWebp from '~/assets/images/selfies/centered-320x320.webp';
import aboutLogoPng5 from '~/assets/images/selfies/5-320x320.png';
import aboutLogoWebp5 from '~/assets/images/selfies/5-320x320.webp';
import aboutLogoPng6 from '~/assets/images/selfies/6-320x320.png';
import aboutLogoWebp6 from '~/assets/images/selfies/6-320x320.webp';
import aboutLogoPng7 from '~/assets/images/selfies/7-320x320.png';
import aboutLogoWebp7 from '~/assets/images/selfies/7-320x320.webp';
import aboutLogoPng8 from '~/assets/images/selfies/8-320x320.png';
import aboutLogoWebp8 from '~/assets/images/selfies/8-320x320.webp';

export interface Logo {
  left: number;
  top: number;
  alt: string;
  srcSet: string[];
}

export const LOGOS_DATA: Logo[] = [
  {
    left: 150,
    top: -250,
    alt: 'About logo 1',
    srcSet: [aboutLogoPng1, aboutLogoWebp1],
  },
  {
    left: -270,
    top: 170,
    alt: 'About logo 2',
    srcSet: [aboutLogoPng2, aboutLogoWebp2],
  },
  {
    left: 220,
    top: -220,
    alt: 'About logo 3',
    srcSet: [aboutLogoPng3, aboutLogoWebp3],
  },
  {
    left: 720,
    top: 720,
    alt: 'About logo 4',
    srcSet: [aboutLogoPng4, aboutLogoWebp4],
  },
  {
    left: -420,
    top: 120,
    alt: 'Hello logo',
    srcSet: [aboutLogoCenteredPng, aboutLogoCenteredWebp],
  },
  {
    left: -220,
    top: 220,
    alt: 'About logo 5',
    srcSet: [aboutLogoPng5, aboutLogoWebp5],
  },
  {
    left: 220,
    top: -120,
    alt: 'About logo 6',
    srcSet: [aboutLogoPng6, aboutLogoWebp6],
  },
  {
    left: -620,
    top: 620,
    alt: 'About logo 7',
    srcSet: [aboutLogoPng7, aboutLogoWebp7],
  },
  {
    left: -620,
    top: 620,
    alt: 'About logo 8',
    srcSet: [aboutLogoPng8, aboutLogoWebp8],
  },
];
