import React from 'react';

import { Certificates } from '../certifiates/certificates';
import { Ul, Strong, PanelWrapper } from './styled';

export const PanelOneView = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>&bull;</Strong>
        Graduated as a Master of Architectural Design, took part at
        Hackathon-contest by MTS in 2015 when web-development by a side with the
        other things became my way of life.
      </li>
      <li>
        <Strong>&bull;</Strong>
        Creating reactive applications for me is like making up some web
        ecosystems. But bricks here - are cutes of code, and my project - is the
        constructions. Using my arch-design skills and react features, i combine
        this in to a real complex react web application!
      </li>
      <li>
        <Strong>&bull;</Strong>
        Closely connected to the design, front-end development process is always
        going on in creative way and i can always see the result of my job! And
        this is what i like so much!
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelTwoView = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>2018-2020 &bull;</Strong>
        I've been working in Itransition Softvare Development Company as a
        Front-end Developer. This time allowed me to dive dipper in to front-end
        and understand how cool is it! Working in a team of developers I took
        part in making up really cool projects and features for our foreign
        customers.
      </li>
      <li>
        <Strong>2008-2019 &bull;</Strong>
        Over 10 years I've been studying on architecture & design
        specialisations. I was lucky to improve my skills in such areas like:
        interior and brand design, modern and concept arts, i created a lot of
        cool creative projects and also got and expierence of presenting them to
        the customers! This expierence has became absolutely helpful in
        front-end, web-design, and even though in my whole life!
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelThreeView = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>STACK:</Strong>
        HTML/CSS, JavaScript/TypeScript, ReactJS
      </li>
      <li>
        <Strong>REACT FEATURES:</Strong>
        Redux, ReduxSagas, Router5, ReactPose / FrameMotion - animations
      </li>
      <li>
        <Strong>FRAMEWORKS:</Strong>
        Symfony, (LoopBack, Angular - quick overview)
      </li>
      <li>
        <Strong>CSS:</Strong>
        Flexbox, Grid
      </li>
      <li>
        <Strong style={{ textTransform: 'uppercase' }}>
          Virtual Machine Platforms & Containers:
        </Strong>
        Docker
      </li>
      <li>
        <Strong style={{ textTransform: 'uppercase' }}>
          JS Build Tools / JS Task Runners:
        </Strong>
        Webpack4, Parcel, GULPq
      </li>
      <li>
        <Strong>CRM:</Strong>
        Wordpress,
      </li>
      <li>
        <Strong>VC:</Strong>
        Git
      </li>
      <li>
        <Strong>WEB-DESIGN:</Strong>
        PHOTOSHOP, GIMP, TinyPNG, PhotoPeaa
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelFourView = () => (
  <PanelWrapper>
    <Certificates />
  </PanelWrapper>
);
