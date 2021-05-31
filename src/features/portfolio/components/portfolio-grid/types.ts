import {
  PortfolioItemModel,
  PortfolioPreviewItemModel,
} from '~/models/portfolio-item.model';

export interface PortfolioGridProps {
  data: PortfolioItemModel[];
  activeCategory: string;
}

export interface PortfolioGridItemProps extends PortfolioPreviewItemModel {
  chunkType: string;
  activeCategory: string;
}
