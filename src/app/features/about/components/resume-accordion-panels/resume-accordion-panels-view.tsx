import React from 'react';

import { Certificates } from '../certifiates/certificates';
import { Ul, Strong, PanelWrapper } from './styled';

export const PanelOneView: React.FC<any> = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>&bull;</Strong>
        Graduated as a Master of Architectural Design, took part at
        Hackathon-contest by MTS in 2015 when web-development by a side with
        other things became my way of life.
      </li>
      <li>
        <Strong>&bull;</Strong>
        Creating reactive applications for me is like making up some web
        ecosystems. But bricks here - are letters and code - is the
        constructions. Using react design features, i can combine it comes
        alive!
      </li>
      <li>
        <Strong>&bull;</Strong>
        Closely connected to the design, front-end development process is always
        going on in creative way and i can always see the result, and i like it
        so much!
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelTwoView: React.FC<any> = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>&bull;</Strong>
        2018-2020. I've been working in Itransition for two years. This time
        allowed me to dive dipper in front-end and understand how cool is it.
        Working with a cool team of developers I took pat in a really cool
        projects and features for our foreign customers.
      </li>
      <li>
        <Strong>&bull;</Strong>
        2008-2018. Over 10 years I've been studying on architecture design
        specialisations. I was lucky to improve my skills in art, advertisement
        design, and creative art which became really helpful in my front-end
        development process.
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelThreeView: React.FC<any> = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>PROGRAMMING LANGUAGES:</Strong>
        JavaScript, TypeScript
      </li>
      <li>
        <Strong>FRAMEWORKS:</Strong>
        React JS, some Symfony and LoopBack frameworks experience
      </li>
      <li>
        <Strong>REACT FEATURES:</Strong>
        Redux, ReduxSagas, Router5, ReactPosed-animations
      </li>
      <li>
        <Strong>CSS:</Strong>
        Flexbox, Grid
      </li>
      <li>
        <Strong>MODULE BUILDERS:</Strong>
        Webpack, Parcel, GULP
      </li>
      <li>
        <Strong>VERSION CONTROLS:</Strong>
        Git
      </li>
      <li>
        <Strong>WEB-DESIGN:</Strong>
        PHOTOSHOP, GIMP, TinyPNG, PhotoPea
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelFourView = () => (
  <PanelWrapper>
    <Certificates />
  </PanelWrapper>
);
