import { PortfolioItemModel } from '~/models/portfolio-item.model';

export enum ProjectFormFields {
  Category = 'category',
  Description = 'description',
  DescriptionList = 'descriptionList',
  ImageName = 'imageName',
  ImageSource = 'imageSource',
  ProjectUrl = 'projectUrl',
  ProjectUrlLabel = 'projectUrlLabel',
  ProjectUrlHref = 'projectUrlHref',
  ThumbnailSource = 'thumbnailSource',
  Title = 'title',
}

export interface ProjectFormModel extends PortfolioItemModel {
  [ProjectFormFields.ProjectUrlHref]?: string;
  [ProjectFormFields.ProjectUrlLabel]?: string;
}
