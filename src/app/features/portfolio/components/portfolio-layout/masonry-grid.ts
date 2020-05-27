import { createElement, FC, useState } from 'react';

import { MasonryGridView } from './masonry-grid-view';

interface Props {
  data: PortfolioItem[];
  selectedCategory: string;
}

interface OtherProps {
  data: PortfolioItem[];
  onItemClick: (index: number) => void;
  handleLayoutComplete: (item: any) => void;
  handleRemoveComplete: (item: any) => void;
  handleImagesLoaded: (imagesLoadedInstance: any) => void;
  selectedCategory: string;
  isOpen: boolean;
  setIsOpen: any;
  photoIndex: number;
  setPhotoIndex: any;
}

interface PortfolioItem {
  category: string;
  imageSrc: string;
  alt: string;
  name: string;
  description: string;
}

export const MasonryGrid: FC<Props> = ({ data, selectedCategory }: Props) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onItemClick = (index: number) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const handleLayoutComplete = (item: any) => {
    // console.warn('Layout Complete', item);
  };

  const handleRemoveComplete = (item: any) => {
    // console.warn('RemoveComplete', item);
  };

  const handleImagesLoaded = (imagesLoadedInstance: any) => {
    console.warn('ImagesLoaded', Boolean(imagesLoadedInstance.isComplete));
  };

  return createElement<OtherProps>(MasonryGridView, {
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
