import { createElement } from 'react';

import { MasonryGridView } from './masonry-grid-view';

interface Props {
  data: PortfolioItem[];
}

interface OtherProps {
  data: PortfolioItem[];
  onItemClick: (value: string) => void;
  handleLayoutComplete: (item: any) => void;
  handleRemoveComplete: (item: any) => void;
  handleImagesLoaded: (imagesLoadedInstance: any) => void;
}

interface PortfolioItem {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

export const MasonryGrid: React.FC<Props> = ({ data }: Props) => {
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
    onItemClick,
    handleLayoutComplete,
    handleRemoveComplete,
    handleImagesLoaded,
  });
};
