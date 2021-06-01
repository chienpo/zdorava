import { Router } from 'router5';
import { PortfolioItemModel } from '~/models/portfolio-item.model';

export interface Props {
  data: PortfolioItemModel;
  portfolioSelectedCategory: string;
  isEditState: boolean;
  router: Router;
  isAuthenticated: boolean;
}
