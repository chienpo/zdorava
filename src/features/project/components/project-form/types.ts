import {
  PortfolioItemModel,
  PortfolioItemField,
} from '~/models/portfolio-item.model';

interface ProjectFormInitialValues {
  [key: string]: string | PortfolioItemField;
}

export interface Props {
  data?: PortfolioItemModel;
  inEditState?: boolean;
  initialValues?: ProjectFormInitialValues;
}

export interface ProjectEditFormValues extends PortfolioItemModel {
  projectUrlHref?: string;
  projectUrlLabel?: string;
}
