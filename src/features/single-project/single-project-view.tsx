import * as React from 'react';
import { I18n } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { AnimatePresence } from 'framer-motion';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { PORTFOLIO_IMAGES_PATH, SITE_URL } from 'constants/site';
import { PORTFOLIO_CATEGORIES_TABS_LABELS } from 'constants/portfolio';
import { ROUTE_NAME_PORTFOLIO_CATEGORY } from 'router/routes';
import { LazyImage } from 'ui/lazy-image';
import {
  AnimatedDescriptionStyled,
  AnimatedFigureStyled,
  AnimatedSectionStyled,
  Category,
  Description,
  StyledLink,
  StyledRealProjectLink,
  Title,
} from './styled';

interface Props {
  data: PortfolioItemModel;
  portfolioSelectedCategory: string;
}

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

const descriptionVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const SingleProjectView: React.FC<Props> = ({
  data,
  portfolioSelectedCategory,
}) => (
  <AnimatedSectionStyled initial="exit" animate="enter" exit="exit">
    {data && (
      <AnimatePresence>
        <AnimatedFigureStyled variants={imageVariants} initial="exit">
          <LazyImage
            alt={data.alt}
            src={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${data.category}/${
              data.imageSrc
            }`}
            srcSet={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${
              data.category
            }-thumbnail/${data.thumbnailSrc}`}
            style={{ maxWidth: '70vw' }}
          />
        </AnimatedFigureStyled>
      </AnimatePresence>
    )}
    <AnimatePresence>
      <AnimatedDescriptionStyled variants={descriptionVariants} initial="exit">
        <StyledLink
          routeName={ROUTE_NAME_PORTFOLIO_CATEGORY}
          routeParams={{ category: portfolioSelectedCategory }}
        >
          ← &nbsp;
          <Trans>Back</Trans>
        </StyledLink>

        {data && (
          <I18n>
            {({ i18n }) => (
              <>
                <Title>{data.title[i18n.language]}</Title>
                <Description>
                  {data.description[i18n.language]}
                  <br />
                  {data.projectLinks && (
                    <Trans>With a great pleasure I suggest you</Trans>
                  )}
                  &nbsp;
                  {data.projectLinks &&
                    data.projectLinks.map(({ href, label }) => (
                      <StyledRealProjectLink
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener"
                      >
                        <Trans>watch real project</Trans>
                      </StyledRealProjectLink>
                    ))}
                </Description>
                <Category>
                  {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[data.category])}
                </Category>
              </>
            )}
          </I18n>
        )}
      </AnimatedDescriptionStyled>
    </AnimatePresence>
  </AnimatedSectionStyled>
);
