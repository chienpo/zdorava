export interface PortfolioItemField {
  [key: string]: string;
}

export interface PortfolioPreviewItemModel {
  category: string;
  imageName: string;
  imageSrc: string;
  thumbnailSrc: string;
  title: PortfolioItemField;
}

export interface PortfolioItemModel extends PortfolioPreviewItemModel {
  description: PortfolioItemField;
  descriptionList?: PortfolioItemField;
  name?: string;
  projectUrl?: PortfolioItemField;
  id: string;
}
