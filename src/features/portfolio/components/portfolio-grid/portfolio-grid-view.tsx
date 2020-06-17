import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { AnimatePresence } from 'framer-motion';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import {
  CHUNK_TYPE_ONE,
  CHUNK_TYPE_TWO,
  CHUNK_TYPE_THREE,
} from 'constants/portfolio';
import { SITE_URL, PORTFOLIO_IMAGES_PATH } from 'constants/site';
import { PortfolioChunkItem } from '../portfolio-chunk-item';
import { MotionChunkRow, MotionGridContainer } from './styled';

interface DataProps {
  data: PortfolioItemModel[];
}

interface Props {
  onItemClick: (index: string) => void;
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
    const array = [...Array(data.length).keys()];

    const types: string[] = [CHUNK_TYPE_ONE, CHUNK_TYPE_TWO, CHUNK_TYPE_THREE];

    const chunksNumber = array.length / types.length;

    const arr: string[][] = [];

    for (let i = 0; i < chunksNumber; i++) {
      arr.push(types);
    }

    return arr.flat()[chunkInd];
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
          imageTitle={
            data[(photoIndex + 1) % data.length].title &&
            data[(photoIndex + 1) % data.length].title.en
          }
          imageCaption={
            data[(photoIndex + 1) % data.length].description &&
            data[(photoIndex + 1) % data.length].description.en
          }
          reactModalStyle={{ color: 'yellow' }}
          imagePadding={100}
          wrapperClassName="wrapperClassName"
          prevLabel="previous-project"
          nextLabel="next-project"
        />
      )}
      <AnimatePresence>
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
                    title,
                  }: PortfolioItemModel,
                  index
                ) => (
                  <PortfolioChunkItem
                    key={imageSrc}
                    selectedCategory={selectedCategory}
                    category={category}
                    imageSrc={imageSrc}
                    alt={alt}
                    title={title}
                    description={description}
                    onItemClick={() => onItemClick(imageSrc)}
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
      </AnimatePresence>
    </>
  );
};
