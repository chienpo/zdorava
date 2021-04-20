import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { I18n } from '@lingui/react';
import { AnimatePresence } from 'framer-motion';

import { PortfolioPreviewItemModel } from '~/models/portfolio-item.model';

import { ROUTE_NAME_PROJECT } from '~/router/routes';
import { PORTFOLIO_CATEGORIES_TABS_LABELS } from '~/constants/portfolio';
import { PORTFOLIO_IMAGES_PATH, SITE_URL } from '~/constants/site';
import {
  Item,
  ItemCategoryLabel,
  ItemCategoryName,
  ItemFigure,
  ItemOrientationType,
  ItemTitle,
  LazyImageStyled,
} from './styled';

interface Props extends PortfolioPreviewItemModel {
  chunkType: string;
  activeCategory: string;
  id: string;
}

export const PortfolioChunkItem: React.FC<Props> = ({
  imageName,
  category,
  chunkType,
  activeCategory,
  thumbnailSrc,
  title,
  id,
}) => {
  const imgThumbnailSource = `${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}-thumbnail/${thumbnailSrc}`;
  const chunkClassName = `${chunkType} ${activeCategory}`;

  return (
    <AnimatePresence>
      <I18n>
        {({ i18n }) => (
          <Item
            className={chunkClassName}
            variants={{
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
            }}
          >
            <ItemOrientationType
              routeName={ROUTE_NAME_PROJECT}
              routeParams={{
                id,
                imageName,
                category: activeCategory,
              }}
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
              <ItemTitle>{title[i18n.language]}</ItemTitle>
            </ItemOrientationType>
          </Item>
        )}
      </I18n>
    </AnimatePresence>
  );
};
