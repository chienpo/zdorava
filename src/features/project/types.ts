import { Router } from 'router5';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { FileUrlType } from '~/form-builder/input-field/types';

export interface Props {
  data: PortfolioItemModel;
  portfolioSelectedCategory: string;
  isEditState: boolean;
  router: Router;
  isAuthenticated: boolean;
  previewUrl: string;
  previewUrlLoading: boolean;
  onPreviewChange: (imageUrl: FileUrlType, fileLoading: boolean) => void;
}
