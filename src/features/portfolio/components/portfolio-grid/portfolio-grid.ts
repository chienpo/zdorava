import { createElement, FC } from 'react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';

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

  return createElement(PortfolioGridView, {
    chunkedData,
    data,
    originOffset,
    selectedCategory,
  });
};
