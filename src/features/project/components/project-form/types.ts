import { PortfolioItemModel } from '~/models/portfolio-item.model';

export interface Props {
  data?: PortfolioItemModel;
  inEditState?: boolean;
  initialValues?: { [key: string]: string };
}

export interface ProjectEditFormValues extends PortfolioItemModel {
  projectUrlHref?: string;
  projectUrlLabel?: string;
}
