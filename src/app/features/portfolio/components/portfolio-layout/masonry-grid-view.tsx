import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

import { SITE_URL, PORTFOLIO_IMAGES_PATH } from '../../../../constants/site';
import {
  ItemLabel,
  ItemDescription,
  StyledMassonry,
  Item,
  ItemLink,
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
}

interface PortfolioItem {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

export const MasonryGridView: React.FC<Props> = ({
  data,
  onItemClick,
  handleLayoutComplete,
  handleRemoveComplete,
  handleImagesLoaded,
}: Props) => {

  return (
    <StyledMassonry
      className="my-gallery-class"
      elementType="div"
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad
      onImagesLoaded={handleImagesLoaded}
      onLayoutComplete={laidOutItems => handleLayoutComplete(laidOutItems)}
      onRemoveComplete={removedItems => handleRemoveComplete(removedItems)}
    >
      {data.map(({ category, src, alt, name, description }: PortfolioItem) => (
        <Item key={alt} className="image-element-class">
          <ItemLink onClick={() => onItemClick(alt)} href="#">
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
          </ItemLink>
        </Item>
      ))}
    </StyledMassonry>
  );
};
