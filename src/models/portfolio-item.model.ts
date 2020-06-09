export interface PortfolioItemModel {
  category: string;
  imageSrc: string;
  alt: string;
  title: { [key: string]: string };
  description: { [key: string]: string };
  thumbnailSrc: string;
  onItemClick?: () => void;
  name?: string;
}
