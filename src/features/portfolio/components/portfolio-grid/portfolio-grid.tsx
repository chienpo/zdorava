import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import {
  CHUNK_TYPE_ONE,
  CHUNK_TYPE_THREE,
  CHUNK_TYPE_TWO,
} from '~/constants/portfolio';
import { PortfolioChunkItem } from './portfolio-chunk-item';
import { MotionChunkRow, MotionGridContainer } from './styled';

interface Props {
  data: PortfolioItemModel[];
  activeCategory: string;
}

export const PortfolioGrid: FC<Props> = ({ data, activeCategory }) => {
  // eslint-disable-next-line unicorn/no-reduce
  const chunkedData = data.reduce(
    (resultArray: PortfolioItemModel[][], item, index) => {
      const chunkIndex: number = Math.floor(index / 4);

      if (!resultArray[chunkIndex]) {
        // TODO: Check this method to fix the rule
        // eslint-disable-next-line no-param-reassign
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  const getChunkType = (chunkInd: number) => {
    const array = [...new Array(data.length)].map((_, i) => i);

    const types: string[] = [CHUNK_TYPE_ONE, CHUNK_TYPE_TWO, CHUNK_TYPE_THREE];

    const chunksNumber = array.length / types.length;

    const resultArray: string[][] = [];

    for (let i = 0; i < chunksNumber; i++) {
      resultArray.push(types);
    }

    return resultArray.flat()[chunkInd];
  };

  return (
    <MotionGridContainer initial="closed" animate="open" exit="closed">
      {chunkedData.map((chunks, ind) => (
        <AnimatePresence key={chunks[0].imageSrc}>
          <MotionChunkRow
            className={`chunk ${activeCategory}`}
            variants={{
              open: {
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            initial="closed"
            exit="closed"
          >
            {chunks.map(
              ({
                category,
                imageSrc,
                imageName,
                thumbnailSrc,
                title,
              }: PortfolioItemModel) => (
                <PortfolioChunkItem
                  key={imageSrc}
                  imageName={imageName}
                  category={category}
                  chunkType={getChunkType(ind)}
                  imageSrc={imageSrc}
                  activeCategory={activeCategory}
                  thumbnailSrc={thumbnailSrc}
                  title={title}
                />
              )
            )}
          </MotionChunkRow>
        </AnimatePresence>
      ))}
    </MotionGridContainer>
  );
};
