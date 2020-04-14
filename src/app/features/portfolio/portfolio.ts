import { createElement, useState, useEffect, FC } from 'react';
import axios from 'axios';

import { BACKEND_URL } from '../../constants/api';
import {
  PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '../../constants/portfolio';
import { PageLoader } from '../../ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';

interface PortfolioItem {
  alt: string;
  category: string;
  description: string;
  imageSrc: string;
  name: string;
}

interface Props {
  data: PortfolioItem[];
  activeCategoryPayload: (name: string) => void;
  getNextPortfolioDate: () => void;
  hasMore: boolean;
  selectedCategory: string;
}

export const Portfolio: FC<Props> = () => {
  // eslint-disable-next-line max-len
  const [data, setData] = useState<PortfolioItem[]>([]);
  const [projectsTotalCount, setProjectsTotalCount] = useState<number>(0);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedCategory, setCategory] = useState<string>(PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME);

  const DEFAULT_DATA_LIMIT = 6;

  const [dataLoadCount, setDataLoadCount] = useState<number>(0);

  const prepareCategoryName = (name: string) => {
    let preparedCategoryName;
    switch (name) {
      case PORTFOLIO_CATEGORY_TAB_NAME_ART:
        preparedCategoryName = [PORTFOLIO_CATEGORY_TAB_NAME_ART];
        break;
      case PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND:
        preparedCategoryName = [PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND];
        break;
      default:
        preparedCategoryName = [
          PORTFOLIO_CATEGORY_TAB_NAME_ART,
          PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND
        ]
    }

    return preparedCategoryName;
  };

  const getProductsTotalCount = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/projects/count`, {
        params: {
          'filter[where][category][inq]': ['art'],
        }
      });

      setProjectsTotalCount(response.data.count)
    } catch (error) {
      throw error
    }
  };

  const getData = async (categoryName: string) => {
    setDataLoadCount(prevState => prevState + 1);
    const preparedCategoryNamesArray = prepareCategoryName(categoryName);

    try {
      const response = await axios.get(`${BACKEND_URL}/projects`, {
        params: {
          'filter[limit]': DEFAULT_DATA_LIMIT,
          'filter[where][category][inq]': preparedCategoryNamesArray,
        }
      });

      setData(response.data);
      setPageLoading(false);
    } catch (error) {
      throw error;
    }
  };

  const getNextFirebaseData = async () => {
    setDataLoadCount(prevState => prevState + 1);

    const preparedCategoryNamesArray = prepareCategoryName(selectedCategory);

    try {
      const response = await axios.get(`${BACKEND_URL}/projects`, {
        params: {
          'filter[skip]': dataLoadCount * DEFAULT_DATA_LIMIT,
          'filter[limit]': DEFAULT_DATA_LIMIT,
          'filter[where][category][inq]': preparedCategoryNamesArray,
        }
      });

      setData([...data, ...response.data]);

      const frontEndTotalLength = projectsTotalCount - 15;
      const artTotalLength = projectsTotalCount - 7;

      const maxDataLength = data.some(({category}) => category
        .includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND))
        ? frontEndTotalLength
        : artTotalLength;

      if (data.length >= maxDataLength) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      throw error;
    }
  };

  const onCategoryClick = (name: string) => {
    setCategory(name);
    setDataLoadCount(0);
    setHasMore(true);
    setData([]);
    getData(name).catch((error) => {
      throw error
    });
  };

  useEffect(() => {
    Promise.all([
      getProductsTotalCount(),
      getData(PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME)
    ])
      .then(() => {
        setPageLoading(false);
      })
      .catch((error) => {
        throw error
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pageLoading) {
    return createElement(PageLoader);
  }

  return createElement<Props>(PortfolioView, {
    data,
    activeCategoryPayload: onCategoryClick,
    getNextPortfolioDate: getNextFirebaseData,
    hasMore,
    selectedCategory,
  });
};
