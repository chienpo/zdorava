import { createElement } from 'react';

import { MasonryGridView } from './masonry-grid-view';

interface Props {
  data: PortfolioItem[];
}

interface OtherProps {
  data: PortfolioItem[];
  onItemClick: (value: string) => void;
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

  return createElement<OtherProps>(MasonryGridView, { data, onItemClick });
};
