import React from 'react';

import {
  ItemLabel,
  ItemDescription,
  StyledMassonry,
  Item,
  ItemLink,
  ItemOrientationType,
  ItemImage,
  ItemFigure,
} from './styled';

const masonryOptions = {
  transitionDuration: 800,
};

interface Props {
  data: PortfolioItem[];
  onItemClick: (value: string) => void;
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
}: Props) => {
  const handleLayoutComplete = (item: any) => {
    console.warn(item);
  };

  const handleRemoveComplete = (item: any) => {
    console.warn(item);
  };

  const handleImagesLoaded = (imagesLoadedInstance: any) => {
    console.warn(imagesLoadedInstance);
  };

  return (
    <StyledMassonry
      className="my-gallery-class"
      elementType="div"
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
      onImagesLoaded={handleImagesLoaded}
      onLayoutComplete={laidOutItems => handleLayoutComplete(laidOutItems)}
      onRemoveComplete={removedItems => handleRemoveComplete(removedItems)}
    >
      {data.map((item: PortfolioItem) => (
        <Item key={item.alt} className="image-element-class">
          <ItemLink onClick={() => onItemClick(item.alt)} href="#">
            <ItemOrientationType>
              <ItemFigure>
                <ItemImage src={item.src} alt={item.alt} />
              </ItemFigure>
              <ItemLabel>
                <i className="fa fa-picture-o" />
                {item.name}
              </ItemLabel>
              <ItemDescription>
                <h3>{item.description}</h3>
              </ItemDescription>
            </ItemOrientationType>
          </ItemLink>
        </Item>
      ))}
    </StyledMassonry>
  );
};
