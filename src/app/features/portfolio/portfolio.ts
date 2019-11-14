import { createElement, useState, useEffect } from 'react';

import { PortfolioView } from './portfolio-view';
import { frontEndData } from './front-end-data';
import { artData } from './art-data';

interface Props {
  data: PortfolioItem[];
  activeCategoryPayload: (name: string) => void;
}

interface PortfolioItem {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

export const Portfolio: React.FC<Props> = () => {
  const [data, setData] = useState<PortfolioItem[]>([]);

  const portfolioData = [...frontEndData, ...artData];

  const shuffleCards = (shufflingArray: PortfolioItem[]) => {
    const shuffledArray = [...shufflingArray];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  };

  useEffect(() => {
    if (data.length === 0) {
      setData(portfolioData);
    }
  }, [portfolioData, data]);

  const sortGallery = (name: string) => {
    switch (name) {
      case 'art':
        setData(shuffleCards(artData));
        break;
      case 'frontend':
        setData(shuffleCards(frontEndData));
        break;
      default:
        setData(shuffleCards(portfolioData));
    }
  };

  return createElement<Props>(PortfolioView, {
    data,
    activeCategoryPayload: sortGallery,
  });
};
