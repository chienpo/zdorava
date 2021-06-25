import React from 'react';
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core';

import { SKILLS_DATA } from './skills-data';
import { CertificatesList } from './certifiates-list';
import {
  Ul,
  Li,
  LiInline,
  StackList,
  StackListItem,
  Strong,
  PanelWrapper,
  H4,
} from './styled';

export const PanelAboutView = () => (
  <PanelWrapper>
    <Ul>
      <Li>
        <Trans>
          Graduated as a Master of Architectural Design, took part at
          Hackathon-contest by MTS in 2015 when web-development by a side with
          the other things became my way of life.
        </Trans>
      </Li>
      <Li>
        <Trans>
          Creating reactive applications for me is like making up some web
          ecosystems. But bricks here - are cutes of code, and
          component-structure - is the constructions. Using my arch-design and
          development skills, i combine this in to a real complex react web
          application!
        </Trans>
      </Li>
      <Li>
        <Trans>
          Closely related to design, front-end development process is always
          going on in creative way and i can always see the result of my job.
          And this is what i like so much!
        </Trans>
      </Li>
    </Ul>
  </PanelWrapper>
);

export const PanelExperienceView = () => (
  <PanelWrapper>
    <Ul>
      <Li>
        <Strong>2018-2020</Strong>
        <Trans>
          I&apos;ve been working in Itransition Software Development Company as
          a Front-end Developer. This time allowed me to dive dipper in to
          front-end and understand how cool is it! Working in a team of
          developers I took part in making up really cool projects and features
          for our foreign customers.
        </Trans>
      </Li>
      <Li>
        <Strong>2008-2019</Strong>
        <Trans>
          Over 10 years I&apos;ve been studying on architecture & design
          specialisations. I was lucky to improve my skills in such areas like:
          interior and brand design, modern and concept arts, i created a lot of
          cool creative projects and also got and expierence of presenting them
          to the customers! This expierence has became absolutely helpful in
          front-end, web-design, and even though in my whole life!
        </Trans>
      </Li>
    </Ul>
  </PanelWrapper>
);

export const PanelTechnologyStackView = () => (
  <PanelWrapper>
    <Ul>
      {SKILLS_DATA.map(({ title, images }) => (
        <LiInline key={images[0].src}>
          <H4>
            {i18n._(title)}
            &#x0003A; &nbsp;
          </H4>
          <StackList>
            {images.map(({ alt, src, height }) => (
              <StackListItem key={alt}>
                <img title={alt} height={height} alt={alt} src={src} />
              </StackListItem>
            ))}
          </StackList>
        </LiInline>
      ))}
    </Ul>
  </PanelWrapper>
);

export const PanelLanguagesAndCertificatesView = () => (
  <PanelWrapper>
    <CertificatesList />
  </PanelWrapper>
);
