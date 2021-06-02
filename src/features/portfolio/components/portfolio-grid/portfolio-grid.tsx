import React, { FC } from 'react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { ChunkType } from '~/constants/portfolio';
import { PortfolioGridProps } from './types';

import { PortfolioGridItem } from './portfolio-grid-item';
import { MotionChunkRow, MotionGridContainer } from './styled';

export const PortfolioGrid: FC<PortfolioGridProps> = ({
  data,
  activeCategory,
}) => {
  const chunkedData = data.reduce(
    (accumulator: PortfolioItemModel[][], item, index) => {
      const chunkIndex: number = Math.floor(index / 4);

      if (!accumulator[chunkIndex]) {
        accumulator[chunkIndex] = [];
      }

      accumulator[chunkIndex].push(item);

      return accumulator;
    },
    []
  );

  const getChunkType = (chunkInd: number) => {
    const array = Array.from({ length: data.length }).map((_, i) => i);

    const types: string[] = Object.values(ChunkType);

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
        <MotionChunkRow
          key={chunks[0].imageSrc}
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
          animate="open"
          exit="closed"
        >
          {chunks.map(
            ({ category, imageSrc, imageName, thumbnailSrc, title }) => (
              <PortfolioGridItem
                key={imageName}
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
      ))}
    </MotionGridContainer>
  );
};
