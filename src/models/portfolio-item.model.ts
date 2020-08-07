export interface PortfolioPreviewItemModel {
  alt: string;
  category: string;
  imageSrc: string;
  title: { [key: string]: string };
  thumbnailSrc: string;
}

export interface PortfolioItemModel extends PortfolioPreviewItemModel {
  description: { [key: string]: string };
  name?: string;
  onItemClick?: () => void;
  projectLinks?: { href: string; label: string }[];
}
