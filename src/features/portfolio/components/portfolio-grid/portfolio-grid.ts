import { createElement, FC } from 'react';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { PortfolioGridView } from './portfolio-grid-view';

interface Props {
  data: PortfolioItemModel[];
  selectedCategory: string;
  originOffset: { current: { [key: string]: number } };
}

export const PortfolioGrid: FC<Props> = ({
  data,
  selectedCategory,
  originOffset,
}) => {
  const chunckedData = data.reduce(
    (resultArray: PortfolioItemModel[][], item, index) => {
      const chunkIndex: number = Math.floor(index / 4);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  return createElement(PortfolioGridView, {
    chunckedData,
    data,
    originOffset,
    selectedCategory,
  });
};
