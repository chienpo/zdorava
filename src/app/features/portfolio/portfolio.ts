import { createElement, useState, useEffect, FC } from 'react';
import axios from 'axios';

import { FIREBASE_PORTFOLIO_URL } from '../../constants/api';
import { PORTFOLIO_CATEGORY_TAB_NAME_ART, PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND } from '../../constants/portfolio';
import { PageLoader } from '../../ui/page-loader/page-loader';
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
  getPortfolioDate: () => void;
  hasMore: boolean;
}

export const Portfolio: FC<Props> = () => {
  const [data, setData] = useState<PortfolioItems[]>([]);
  const [categoryData, setCategoryData] = useState<PortfolioItems[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);

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
    const { data: portfolioData } = await axios.get(FIREBASE_PORTFOLIO_URL, {
      params: {
        // orderBy: JSON.stringify("$value"),
        collection: "portfolio",
        orderBy: JSON.stringify("art"),
        limit: 5,
      }
    });

    if (!data.length) {
      setData(portfolioData.slice(0, 7));
      setCategoryData(portfolioData.slice(0, 7));
      return portfolioData.slice(0, 7)
    }
    setData(portfolioData.slice(0, data.length * 2));
    setCategoryData(portfolioData.slice(0, data.length * 2));
    return portfolioData.slice(0, data.length * 2)
  };

  const sortGallery = (name: string) => {
    switch (name) {
      case PORTFOLIO_CATEGORY_TAB_NAME_ART:
        setCategoryData(shuffleCards(data
          .filter(({ category }) => category === name)));
        break;
      case PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND:
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
        setPageLoading(false)
      }).catch(({ response }) => {
      throw response.data.error
    })
  }, []);

  useEffect(() => {
    if (data.length >= 13) {
      setHasMore(false);
    }
  }, [data]);

  if (pageLoading) {
    return createElement(PageLoader);
  }

  return createElement<Props>(PortfolioView, {
    data: categoryData,
    activeCategoryPayload: sortGallery,
    getPortfolioDate,
    hasMore,
  });
};
