import {
  PortfolioItemModel,
  PortfolioItemField,
} from '~/models/portfolio-item.model';
import { ProjectFormModel } from '~/models/project-form.model';

export interface Props {
  data?: PortfolioItemModel;
  inEditState?: boolean;
  initialValues?: ProjectFormModel | PortfolioItemField;
}
