export interface PortfolioItemModel {
  category: string;
  imageSrc: string;
  alt: string;
  title: { [key: string]: string };
  thumbnailSrc: string;
  description: { [key: string]: string };
  projectLinks?: { href: string; label: string }[];
  onItemClick?: () => void;
  name?: string;
}
