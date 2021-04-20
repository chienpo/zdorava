import {
  PortfolioItemModel,
  PortfolioItemField,
} from '~/models/portfolio-item.model';
import { FileUrlType } from '~/form-builder/input-field/types';

interface ProjectFormInitialValues {
  [key: string]: string | PortfolioItemField;
}

export interface Props {
  data?: PortfolioItemModel;
  inEditState?: boolean;
  initialValues?: ProjectFormInitialValues;
  onPreviewChange?: (imageUrl: FileUrlType, fileLoading: boolean) => void;
}

export interface ProjectEditFormValues extends PortfolioItemModel {
  projectUrlHref?: string;
  projectUrlLabel?: string;
}
