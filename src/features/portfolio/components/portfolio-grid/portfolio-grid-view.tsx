import React from 'react';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import {
  CHUNK_TYPE_ONE,
  CHUNK_TYPE_TWO,
  CHUNK_TYPE_THREE,
} from 'constants/portfolio';
import { PortfolioChunkItem } from '../portfolio-chunk-item';
import { MotionChunkRow, MotionGridContainer } from './styled';

interface Props {
  selectedCategory: string;
  originOffset: { current: { [key: string]: number } };
}

interface DataProps {
  chunckedData: PortfolioItemModel[][];
  data: PortfolioItemModel[];
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
  chunckedData,
  data,
  originOffset,
  selectedCategory,
}) => {
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

  const newTabChecked = data.length > 0;

  return (
    <>
      <MotionGridContainer
        initial="closed"
        animate={newTabChecked ? 'open' : 'closed'}
        exit="closed"
      >
        {chunckedData.map((chunks, ind) => (
          <MotionChunkRow
            className={`chunk ${selectedCategory}`}
            key={chunks[0].imageSrc}
            variants={variants}
          >
            {chunks.map(
              (
                {
                  category,
                  imageSrc,
                  alt,
                  name,
                  thumbnailSrc,
                  title,
                }: PortfolioItemModel,
                index
              ) => (
                <PortfolioChunkItem
                  key={imageSrc}
                  alt={alt}
                  category={category}
                  chunkType={getChunkType(ind)}
                  delayPerPixel={0.0002}
                  imageSrc={imageSrc}
                  index={index}
                  originIndex={data.length}
                  originOffset={originOffset}
                  selectedCategory={selectedCategory}
                  thumbnailSrc={thumbnailSrc}
                  title={title}
                />
              )
            )}
          </MotionChunkRow>
        ))}
      </MotionGridContainer>
    </>
  );
};
