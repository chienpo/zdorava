import React from 'react';

import reactUdemyCourse from 'assets/images/sertificates/react-udemy-course.jpg';
import spokenIntermediateOneCourseCertificate from 'assets/images/sertificates/spoken-intermediate-one-course-lagunovsky.png';
import businessEnglishThreeCourseCertificate from 'assets/images/sertificates/business-english-three-course-lagunovsky.png';

import { Ul } from './styled';

export const PanelOneView: React.FC<any> = () => (
  <div>
    <Ul>
      <li>
        <strong>&bull;</strong>
        Graduated as a Master of Architectural Design, took part at Hackathon-contest by MTS in 2015 when web-development by a side with other things became my way of life.
      </li>
      <li>
        <strong>&bull;</strong>
        Creating reactive applications for me is like making up some web ecosystems.
        But bricks here - are letters and code - is the constructions. Using react design features, i can combine it comes alive!
      </li>
      <li>
        <strong>&bull;</strong>
        Closely connected to the design, front-end development process is always going on in creative way and i can always see the result, and i like it so much!
      </li>
    </Ul>
  </div>
);

export const PanelTwoView: React.FC<any> = () => (
  <div>
    <Ul>
      <li>
        <strong>&bull;</strong>
        2018-2020. I've been working in Itransition for two years. This time allowed me to dive dipper in front-end and understand how cool is it.
        Working with a cool team of developers I took pat in a really cool projects and features for our foreign customers.
      </li>
      <li>
        <strong>&bull;</strong>
        2008-2018. Over 10 years I've been studying on architecture design specialisations.
        I was lucky to improve my skills in art, advertisement design, and creative art which became really helpful in my front-end development process.
      </li>
    </Ul>
  </div>
);

export const PanelThreeView: React.FC<any> = () => (
  <div>
    <Ul>
      <li>
        <strong>PROGRAMMING LANGUAGES:</strong>
        JavaScript, TypeScript
      </li>
      <li>
        <strong>FRAMEWORKS:</strong>
        React JS, some Symfony and LoopBack frameworks experience
      </li>
      <li>
        <strong>REACT FEATURES:</strong>
        Redux, ReduxSagas, Router5, ReactPosed-animations
      </li>
      <li>
        <strong>CSS:</strong>
        Flexbox, Grid
      </li>
      <li>
        <strong>MODULE BUILDERS:</strong>
        Webpack, Parcel, GULP
      </li>
      <li>
        <strong>VERSION CONTROLS:</strong>
        Git
      </li>
      <li>
        <strong>WEB-DESIGN:</strong>
        PHOTOSHOP, GIMP, TinyPNG, PhotoPea
      </li>
    </Ul>
  </div>
);

export const PanelFourView: React.FC<any> = () => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '10px', padding: '10px' }}>
      <img style={{ width: '100%', border: '1px solid black', filter: 'grayscale(100%)' }} src={reactUdemyCourse} alt="udemy react course certificate" />
      <img style={{ width: '100%', border: '1px solid black', filter: 'grayscale(100%)' }} src={spokenIntermediateOneCourseCertificate} alt="spoken intermediate one course certificate lagunovsky" />
      <img style={{ width: '100%', border: '1px solid black', filter: 'grayscale(100%)' }} src={businessEnglishThreeCourseCertificate} alt="business english three course certificate lagunovsky" />
    </div>
  </div>
);
