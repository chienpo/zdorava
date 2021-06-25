import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { i18n } from '@lingui/core';
import * as env from '~/env';

import { PortfolioGridItemProps } from './types';

import { ROUTE_NAME_PROJECT } from '~/router/routes';
import { PROJECT_THUMBNAIL_URL } from '~/constants/api';
import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '~/constants/portfolio';
import {
  Item,
  ItemCategoryLabel,
  ItemCategoryName,
  ItemFigure,
  ItemOrientationType,
  ItemTitle,
  LazyImageStyled,
} from './styled';

const variants = {
  open: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      x: { stiffness: 1000, velocity: -250, duration: 1.2 },
      y: {
        stiffness: 1000,
        velocity: -250,
        duration: 1.2,
        delay: 1.2,
      },
      border: { duration: 0.4 },
    },
  },
  closed: {
    x: 200,
    y: 200,
    scale: 0,
    transition: {
      x: { stiffness: 1000, duration: 1.6 },
      y: { stiffness: 1000, duration: 0.2 },
    },
  },
};

export const PortfolioGridItem: React.FC<PortfolioGridItemProps> = ({
  imageName,
  category,
  chunkType,
  activeCategory,
  thumbnailSrc,
  title,
}) => {
  const imgThumbnailSource =
    env.ENVIRONMENT === 'DEV'
      ? thumbnailSrc
      : PROJECT_THUMBNAIL_URL(category, thumbnailSrc);
  const chunkClassName = `${chunkType} ${activeCategory}`;

  return (
    <Item className={chunkClassName} variants={variants}>
      <ItemOrientationType
        routeName={ROUTE_NAME_PROJECT}
        routeParams={{ id: imageName, category: activeCategory }}
        activeClassName="active"
      >
        <ItemFigure>
          <LazyImageStyled
            alt={imageName}
            src={imgThumbnailSource}
            srcSet={imgThumbnailSource}
          />
        </ItemFigure>
        <ItemCategoryName>
          <FontAwesomeIcon icon={faImage} />
          <ItemCategoryLabel>
            {i18n._(PORTFOLIO_CATEGORIES_TABS_LABELS[activeCategory])}
          </ItemCategoryLabel>
        </ItemCategoryName>
        {/* eslint-disable-next-line no-underscore-dangle */}
        <ItemTitle>{title[i18n._locale]}</ItemTitle>
      </ItemOrientationType>
    </Item>
  );
};
