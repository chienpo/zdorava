import * as React from 'react';
import { I18n } from '@lingui/react';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { PORTFOLIO_CATEGORIES_TABS_LABELS } from 'app/constants/portfolio';
import { SITE_URL, PORTFOLIO_IMAGES_PATH } from 'app/constants/site';
import { ROUTE_NAME_PORTFOLIO } from 'app/constants/routes';
import {
  StyledMotionProjectSection,
  StyledMotionFigure,
  StyledMotionDescription,
  Title,
  Description,
  Category,
  StyledLink,
  StyledImg,
} from './styled';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const SingleProjectView: React.FC<{
  data: PortfolioItemModel;
}> = ({ data }) => {
  const { category, imageSrc, alt, title, description } = data;

  return (
    <I18n>
      {({ i18n }) => (
        <StyledMotionProjectSection initial="exit" animate="enter" exit="exit">
          <StyledMotionFigure variants={imageVariants}>
            <StyledImg
              src={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}/${imageSrc}`}
              alt={alt}
            />
          </StyledMotionFigure>
          <StyledMotionDescription variants={backVariants}>
            <StyledLink routeName={ROUTE_NAME_PORTFOLIO}>← Back</StyledLink>

            <Title>{title[i18n.language]}</Title>
            <Description>{description[i18n.language]}</Description>
            <Category>
              {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[category])}
            </Category>
          </StyledMotionDescription>
        </StyledMotionProjectSection>
      )}
    </I18n>
  );
};
