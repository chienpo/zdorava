import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

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
  isOpen: any;
  setIsOpen: (val: boolean) => any;
  photoIndex: any;
  setPhotoIndex: any;
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
  isOpen,
  setIsOpen,
  photoIndex,
  setPhotoIndex,
}: Props) => {

  const images = data.map(({ src }) => `${SITE_URL}${PORTFOLIO_IMAGES_PATH}${selectedCategory === 'all' ? 'design' : selectedCategory}/${src}`);

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle="title"
          imageCaption="caption"
          reactModalStyle={{ color: 'yellow' }}
          imagePadding={100}
          wrapperClassName="wrapperClassName"
          prevLabel="prevLabel"
          nextLabel="nextLabel"
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
           src,
           alt,
           name,
           description
        }: PortfolioItem) => (
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
    </>
  );
};
