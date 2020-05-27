import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { PortfolioItemModel } from "../../../../../models/portfolio-item.model";
import { SITE_URL, PORTFOLIO_IMAGES_PATH } from '../../../../constants/site';
import { StyledMassonry } from './styled';
import {PortfolioItem} from "../portfolio-item/portfolio-item";

const masonryOptions = {
  transitionDuration: 1200,
};

interface DataProps {
  data: PortfolioItemModel[];
}

interface Props extends DataProps {
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

  const getImagePath = (curItem: PortfolioItemModel) => {
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
        {(data as PortfolioItemModel[]).map(({
           category,
           imageSrc,
           alt,
           name,
           description
        }, index) => (
          <PortfolioItem
            key={alt}
            category={category}
            imageSrc={imageSrc}
            alt={alt}
            name={name}
            description={description}
            className={selectedCategory}
            onItemClick={() => onItemClick(index)}
          />
        ))}
      </StyledMassonry>
    </>
  );
};
