import { createElement, FC, useState } from 'react';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import { MasonryGridView } from './masonry-grid-view';

interface Props {
  data: PortfolioItemModel[];
  selectedCategory: string;
}

export const MasonryGrid: FC<Props> = ({ data, selectedCategory }) => {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onItemClick = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const handleLayoutComplete: (laidOutItems: {}[]) => void = laidOutItems => {
    console.warn('Layout Complete', laidOutItems);
  };

  const handleRemoveComplete: (removedItems: {}[]) => void = removedItems => {
    console.warn('RemoveComplete', removedItems);
  };

  const handleImagesLoaded: (imagesLoadedInstance: {}) => void = imagesLoadedInstance => {
    console.warn(
      'ImagesLoaded',
      imagesLoadedInstance,
      Boolean(imagesLoadedInstance)
    );
  };

  return createElement(MasonryGridView, {
    data,
    selectedCategory,
    onItemClick,
    handleLayoutComplete,
    handleRemoveComplete,
    handleImagesLoaded,
    isOpen,
    setIsOpen,
    photoIndex,
    setPhotoIndex,
  });
};
