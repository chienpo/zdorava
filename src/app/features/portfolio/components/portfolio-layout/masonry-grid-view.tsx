import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

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

interface PortfolioItem {
  category: string;
  imageSrc: string;
  alt: string;
  name: string;
  description: string;
  details: string;
}

interface Props {
  data: PortfolioItem[];
  onItemClick: (index: number) => void;
  handleLayoutComplete: (item: any) => void;
  handleRemoveComplete: (item: any) => void;
  handleImagesLoaded: (imagesLoadedInstance: any) => void;
  selectedCategory: string;
  isOpen: any;
  setIsOpen: (val: boolean) => any;
  photoIndex: any;
  setPhotoIndex: any;
}

export const MasonryGridView: React.FC<any> = ({
  data,
  onItemClick,
  handleLayoutComplete,
  handleRemoveComplete,
  handleImagesLoaded,
  selectedCategory,
  isOpen,
  setIsOpen,
  photoIndex,
  setPhotoIndex,
}: Props) => {

  const getImagePath = (curItem: PortfolioItem) => {
    return `${SITE_URL}${PORTFOLIO_IMAGES_PATH}${curItem.category}/${curItem.imageSrc}`
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={getImagePath(data[photoIndex])}
          nextSrc={getImagePath(data[(photoIndex + 1) % data.length])}
          prevSrc={getImagePath(data[(photoIndex + data.length - 1) % data.length])}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
          imageTitle={data[(photoIndex + 1) % data.length].name}
          imageCaption={data[(photoIndex + 1) % data.length].description}
          reactModalStyle={{ color: 'yellow' }}
          imagePadding={100}
          wrapperClassName="wrapperClassName"
          prevLabel="previous-project"
          nextLabel="next-project"
        />
      )}
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
        {data.map(({
           category,
           imageSrc,
           alt,
           name,
           description
        }: PortfolioItem, index) => (
          <Item
            key={alt}
            className={selectedCategory}
            onClick={() => onItemClick(index)}
          >
            <ItemOrientationType>
              <ItemFigure>
                <ItemImage
                  src={`${SITE_URL}${PORTFOLIO_IMAGES_PATH}${category}/${imageSrc}`}
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
    </>
  );
};
