import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { PortfolioItemModel } from '../../../../../models/portfolio-item.model';
import { PORTFOLIO_IMAGES_PATH, SITE_URL } from '../../../../constants/site';
import {
  Item,
  ItemTitle,
  ItemFigure,
  ItemImage,
  ItemCategoryName,
  ItemCategoryLabel,
  ItemOrientationType,
} from './styled';

export const PortfolioItemView: React.FC<PortfolioItemModel> = ({
  onItemClick,
  className,
  category,
  alt,
  name,
  description,
  thumbnailSrc,
}) => (
  <Item className={className} onClick={onItemClick}>
    <ItemOrientationType>
      <ItemFigure>
        <ItemImage
          src={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}-thumbnail/${thumbnailSrc}`}
          alt={alt}
        />
      </ItemFigure>
      <ItemCategoryName>
        <FontAwesomeIcon icon={faImage} />
        <ItemCategoryLabel>{name}</ItemCategoryLabel>
      </ItemCategoryName>
      <ItemTitle>{description}</ItemTitle>
    </ItemOrientationType>
  </Item>
);
