import { PortfolioItemModel } from '~/models/portfolio-item.model';

export interface Props {
  onCategoryClick: (categoryName: string) => void;
  data: PortfolioItemModel[];
  getNextDataChunk: () => void;
  hasMore: boolean;
  activeCategory: string;
  isAuthenticated: boolean;
}
