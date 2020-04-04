import { createElement, useState, useEffect, FC } from 'react';
import axios from 'axios';

import { PageLoader} from 'app/ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';

interface PortfolioItems {
  category: string;
  src: string;
  alt: string;
  name: string;
  description: string;
}

interface Props {
  data: PortfolioItems[];
  activeCategoryPayload: (name: string) => void;
}

export const Portfolio: FC<Props> = () => {
  const [data, setData] = useState<PortfolioItems[]>([]);
  const [categoryData, setCategoryData] = useState<PortfolioItems[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const shuffleCards = (shufflingArray: PortfolioItems[]) => {
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

  const getPortfolioDate = async () => {
    const { data: responseData } = await axios.get('https://zdorava-9a8e1.firebaseio.com/portfolio.json');

    const portfolioData = Object.entries(responseData)
      .map(([, value]) => value)
      .flat();

    return portfolioData;
  };

  const sortGallery = (name: string) => {
    switch (name) {
      case 'art':
        setCategoryData(shuffleCards(data
          .filter(({ category }) => category === name)));
        break;
      case 'frontend':
        setCategoryData(shuffleCards(data
          .filter(({ category }) => category === name)));
        break;
      default:
        setCategoryData(shuffleCards(data));
    }
  };

  useEffect(() => {
      getPortfolioDate()
        .then((portfolioData: any = []) => {
          setData(portfolioData);
          setCategoryData(portfolioData);
          setTimeout(() => setPageLoading(false), 1800);
        }).catch(({ response }) => {
          throw response.data.error
        })
  }, []);

  if (pageLoading) {
    return createElement(PageLoader);
  }

  return createElement<Props>(PortfolioView, {
    data: categoryData,
    activeCategoryPayload: sortGallery,
  });
};
