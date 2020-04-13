import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

import { SITE_URL, PORTFOLIO_IMAGES_PATH } from '../../../../constants/site';
import {
  ItemLabel,
  ItemDescription,
  StyledMassonry,
  Item,
  ItemOrientationType,
  ItemImage,
  ItemFigure,
  ItemName,
} from './styled';

const masonryOptions = {
  transitionDuration: 1200,
};

interface Props {
  data: PortfolioItem[];
  onItemClick: (value: string) => void;
  handleLayoutComplete: (item: any) => void;
  handleRemoveComplete: (item: any) => void;
  handleImagesLoaded: (imagesLoadedInstance: any) => void;
  selectedCategory: string;
}

interface PortfolioItem {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

export const MasonryGridView: React.FC<any> = ({
  data,
  onItemClick,
  handleLayoutComplete,
  handleRemoveComplete,
  handleImagesLoaded,
  selectedCategory,
}: Props) => {

  return (
    <StyledMassonry
      className={selectedCategory}
      elementType="div"
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad
      onImagesLoaded={handleImagesLoaded}
      onLayoutComplete={laidOutItems => handleLayoutComplete(laidOutItems)}
      onRemoveComplete={removedItems => handleRemoveComplete(removedItems)}
    >
      {data.map(({ category, src, alt, name, description }: PortfolioItem) => (
        <Item
          key={alt}
          className={selectedCategory}
          onClick={() => onItemClick(alt)}
        >
          <ItemOrientationType>
            <ItemFigure>
              <ItemImage
                src={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}/${src}`}
                alt={alt}
                width="400px"
              />
            </ItemFigure>
            <ItemLabel>
              <FontAwesomeIcon icon={faImage} />
              <ItemName>
                {name}
              </ItemName>
            </ItemLabel>
            <ItemDescription>
              {description}
            </ItemDescription>
          </ItemOrientationType>
        </Item>
      ))}
    </StyledMassonry>
  );
};
