import React from 'react';
import { Trans } from '@lingui/macro';

import { Certificates } from '../certifiates/certificates';
import { Ul, Strong, PanelWrapper } from './styled';

export const PanelOneView = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Trans>
          Graduated as a Master of Architectural Design, took part at
          Hackathon-contest by MTS in 2015 when web-development by a side with
          the other things became my way of life.
        </Trans>
      </li>
      <li>
        <Trans>
          Creating reactive applications for me is like making up some web
          ecosystems. But bricks here - are cutes of code, and
          component-structure - is the constructions. Using my arch-design and
          development skills, i combine this in to a real complex react web
          application!
        </Trans>
      </li>
      <li>
        <Trans>
          Closely related to design, front-end development process is always
          going on in creative way and i can always see the result of my job.
          And this is what i like so much!
        </Trans>
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelTwoView = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>2018-2020</Strong>
        <Trans>
          I've been working in Itransition Softvare Development Company as a
          Front-end Developer. This time allowed me to dive dipper in to
          front-end and understand how cool is it! Working in a team of
          developers I took part in making up really cool projects and features
          for our foreign customers.
        </Trans>
      </li>
      <li>
        <Strong>2008-2019</Strong>
        <Trans>
          Over 10 years I've been studying on architecture & design
          specialisations. I was lucky to improve my skills in such areas like:
          interior and brand design, modern and concept arts, i created a lot of
          cool creative projects and also got and expierence of presenting them
          to the customers! This expierence has became absolutely helpful in
          front-end, web-design, and even though in my whole life!
        </Trans>
      </li>
    </Ul>
  </PanelWrapper>
);

export const PanelThreeView = () => (
  <PanelWrapper>
    <Ul>
      <li>
        <Strong>
          <Trans>STACK:</Trans>
        </Strong>
        HTML/CSS, JavaScript/TypeScript, ReactJS
      </li>
      <li>
        <Strong>
          <Trans>REACT FEATURES:</Trans>
        </Strong>
        <Trans>
          Redux, ReduxSagas, Router5, ReactPose / FrameMotion - animations
        </Trans>
      </li>
      <li>
        <Strong>
          <Trans>FRAMEWORKS:</Trans>
        </Strong>
        <Trans>
          Symfony, (LoopBack, Angular - experience just for my own portfolio web
          app)
        </Trans>
      </li>
      <li>
        <Strong>CSS:</Strong>
        Flexbox, Grid
      </li>
      <li>
        <Strong style={{ textTransform: 'uppercase' }}>
          <Trans>Virtual Machine Platforms & Containers:</Trans>
        </Strong>
        Docker
      </li>
      <li>
        <Strong style={{ textTransform: 'uppercase' }}>
          <Trans>JS Build Tools / JS Task Runners:</Trans>
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
        <Strong>
          <Trans>WEB-DESIGN:</Trans>
        </Strong>
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
