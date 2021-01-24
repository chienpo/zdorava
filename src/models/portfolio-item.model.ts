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
  descriptionList?: { [key: string]: string[] };
  name?: string;
  projectUrl?: PortfolioItemField;
}
