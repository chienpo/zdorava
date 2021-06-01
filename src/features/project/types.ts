import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { Router } from 'router5';

export interface Props {
  data: PortfolioItemModel;
  portfolioSelectedCategory: string;
  isEditState: boolean;
  router: Router;
  isAuthenticated: boolean;
}
