import { PortfolioItemModel } from '~/models/portfolio-item.model';

export interface ProjectFormModel extends PortfolioItemModel {
  projectUrlHref?: string;
  projectUrlLabel?: string;
}
