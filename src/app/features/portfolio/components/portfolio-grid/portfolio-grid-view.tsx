import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import {
  CHUNK_TYPE_ONE,
  CHUNK_TYPE_TWO,
  CHUNK_TYPE_THREE,
} from 'app/constants/portfolio';
import { SITE_URL, PORTFOLIO_IMAGES_PATH } from 'app/constants/site';
import { PortfolioChunkItem } from '../portfolio-chunk-item';
import { MotionChunkRow, MotionGridContainer } from './styled';

interface DataProps {
  data: PortfolioItemModel[];
}

interface Props {
  onItemClick: (index: number) => void;
  selectedCategory: string;
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  photoIndex: number;
  setPhotoIndex: (index: number) => void;
  originOffset: { current: { [key: string]: number } };
  chunckedData: PortfolioItemModel[][];
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const PortfolioGridView: React.FC<Props & DataProps> = ({
  data,
  onItemClick,
  selectedCategory,
  isOpen,
  setIsOpen,
  photoIndex,
  setPhotoIndex,
  originOffset,
  chunckedData,
}) => {
  const getImagePath = (curItem: PortfolioItemModel) => {
    return `${SITE_URL}${PORTFOLIO_IMAGES_PATH}${curItem.category}/${
      curItem.imageSrc
    }`;
  };

  // TODO: Update
  const getChunkType = (chunkInd: number) => {
    const chunkNum = chunkInd + 1;

    let type: string = CHUNK_TYPE_ONE;

    if ([1, 4, 7, 10].includes(chunkNum)) {
      type = CHUNK_TYPE_ONE;
    }

    if ([2, 5, 8, 11].includes(chunkNum)) {
      type = CHUNK_TYPE_TWO;
    }

    if ([3, 6, 9, 12].includes(chunkNum)) {
      type = CHUNK_TYPE_THREE;
    }

    return type;
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={getImagePath(data[photoIndex])}
          nextSrc={getImagePath(data[(photoIndex + 1) % data.length])}
          prevSrc={getImagePath(
            data[(photoIndex + data.length - 1) % data.length]
          )}
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
      <MotionGridContainer initial="closed" animate="open">
        {chunckedData.map((item: PortfolioItemModel[], ind) => (
          <MotionChunkRow
            className={`chunk ${selectedCategory}`}
            key={item[0].imageSrc}
            variants={variants}
          >
            {item.map(
              (
                {
                  category,
                  imageSrc,
                  alt,
                  name,
                  description,
                  thumbnailSrc,
                }: PortfolioItemModel,
                index
              ) => (
                <PortfolioChunkItem
                  key={imageSrc}
                  selectedCategory={selectedCategory}
                  category={category}
                  imageSrc={imageSrc}
                  alt={alt}
                  name={name}
                  description={description}
                  onItemClick={() => onItemClick(index)}
                  thumbnailSrc={thumbnailSrc}
                  index={index}
                  originIndex={data.length}
                  delayPerPixel={0.0002}
                  originOffset={originOffset}
                  chunkType={getChunkType(ind)}
                />
              )
            )}
          </MotionChunkRow>
        ))}
      </MotionGridContainer>
    </>
  );
};
