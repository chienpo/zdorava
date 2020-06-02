import { createElement, FC, useState } from 'react';

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
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onItemClick = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

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
    data,
    selectedCategory,
    onItemClick,
    isOpen,
    setIsOpen,
    photoIndex,
    setPhotoIndex,
    originOffset,
    chunckedData,
  });
};
