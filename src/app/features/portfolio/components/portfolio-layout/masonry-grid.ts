import { createElement, FC } from 'react';

import { MasonryGridView } from './masonry-grid-view';

interface Props {
  data: PortfolioItem[];
  selectedCategory: string;
}

interface OtherProps {
  data: PortfolioItem[];
  onItemClick: (value: string) => void;
  handleLayoutComplete: (item: any) => void;
  handleRemoveComplete: (item: any) => void;
  handleImagesLoaded: (imagesLoadedInstance: any) => void;
  selectedCategory: string;
}

interface PortfolioItem {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

export const MasonryGrid: FC<Props> = ({ data, selectedCategory }: Props) => {
  const onItemClick = (value: string) => {
    alert(value);
  };

  const handleLayoutComplete = (item: any) => {
    console.warn('Layout Complete', item);
  };

  const handleRemoveComplete = (item: any) => {
    console.warn('RemoveComplete', item);
  };

  const handleImagesLoaded = (imagesLoadedInstance: any) => {
    console.warn('ImagesLoaded', imagesLoadedInstance);
  };

  return createElement<OtherProps>(MasonryGridView, {
    data,
    selectedCategory,
    onItemClick,
    handleLayoutComplete,
    handleRemoveComplete,
    handleImagesLoaded,
  });
};
