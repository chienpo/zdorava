import { createElement, useState, useEffect, FC } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/database';

import { BACKEND_URL } from '../../constants/api';
import {
  PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '../../constants/portfolio';
import { PageLoader } from '../../ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';
import { PortfolioItemModel } from "../../../models/portfolio-item.model";

const FIREBASE_AUTH_DOMAIN = 'zdorava-9a8e1.firebaseio.com';
const FIREBASE_DATABASE_URL = 'https://zdorava-9a8e1.firebaseio.com';
const FIREBASE_DATABASE_REF = 'portfolio';

interface Props {
  data: PortfolioItemModel[];
  activeCategoryPayload: (name: string) => void;
  getNextPortfolioDate: () => void;
  hasMore: boolean;
  selectedCategory: string;
}

export const Portfolio: FC = () => {
  // eslint-disable-next-line max-len
  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [projectsTotalCount, setProjectsTotalCount] = useState<number>(0);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedCategory, setCategory] = useState<string>(PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME);

  const DATA_CHANK_SIZE = 6;

  const [dataLoadCount, setDataLoadCount] = useState<number>(1);

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
      const response = await axios.get(`https://zdorava-9a8e1.firebaseio.com/portfolio.json`, {
        params: {
          shallow: true,
        }
      });

      setProjectsTotalCount(Object.keys(response.data).length)
    } catch (error) {
      throw error
    }
  };

  const getData = async (categoryName: string) => {
    const categoryStartIndex = categoryName === 'art' ? "7" : "0"
    const categoryEndIndex = categoryName === 'art' ? (DATA_CHANK_SIZE + DATA_CHANK_SIZE).toString() : DATA_CHANK_SIZE.toString()

    firebase.database().ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .startAt(categoryStartIndex)
      .endAt(categoryEndIndex)
      .once('value')
      .then(snapshot => {

        const arrayOfKeys = Object.keys(snapshot.val())
        console.info(arrayOfKeys)

        const results = arrayOfKeys
          .map((key) => snapshot.val()[key]);
        console.info(results)

        setData(results);
        setPageLoading(false);
        setDataLoadCount(prevState => prevState + 1);
    }).catch((error) => {
      throw error;
    })
  };

  const getNextFirebaseData = async () => {
    setDataLoadCount(prevState => prevState + 1);

    const artOffset = selectedCategory === 'art' ? 0 : 6;

    firebase.database().ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .startAt(((((dataLoadCount) * DATA_CHANK_SIZE) + 1) - artOffset).toString())
      .endAt(selectedCategory === 'frontend' ? "6" : (((dataLoadCount * DATA_CHANK_SIZE) - artOffset) + DATA_CHANK_SIZE).toString())
      .once('value')
      .then(snapshot => {
        console.info('snapshot.val()', snapshot.val())
        if (!snapshot.val()) {
          setHasMore(false);

          return
        }

        const arrayOfKeys = Object.keys(snapshot.val())

        const results = arrayOfKeys
          .map((key) => snapshot.val()[key]);

        console.info(results)

        setData(prevState => [...prevState, results].flatMap(item => item));

        const frontEndTotalLength = projectsTotalCount - 15;
        const artTotalLength = projectsTotalCount - 7;

        const maxDataLength = data.some(({category}) => category
          .includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND))
          ? frontEndTotalLength
          : artTotalLength;

        console.info('maxDataLength',data, maxDataLength)

        // if (data.length >= maxDataLength) {
        //   setHasMore(false);
        // } else {
        //   setHasMore(true);
        // }
      }).catch((error) => {
      throw error;
    })

    // try {
    //   const response = await axios.get(`${BACKEND_URL}/portfolio.json`, {
    //     params,
    //     // params: {
    //     //   // 'filter[skip]': dataLoadCount * DATA_CHANK_SIZE,
    //     //   // 'filter[limit]': DATA_CHANK_SIZE,
    //     //   // 'filter[where][category][inq]': preparedCategoryNamesArray,
    //     // }
    //   });
    //
    //
    //   const preparedData = Object.values(response.data) as PortfolioItemModel[];
    //   setData([...data, ...preparedData]);
    //
    //   const frontEndTotalLength = projectsTotalCount - 15;
    //   const artTotalLength = projectsTotalCount - 7;
    //
    //   const maxDataLength = data.some(({category}) => category
    //     .includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND))
    //     ? frontEndTotalLength
    //     : artTotalLength;
    //
    //   if (data.length >= maxDataLength) {
    //     setHasMore(false);
    //   } else {
    //     setHasMore(true);
    //   }
    //
    // } catch (error) {
    //   throw error;
    // }
  };

  const onCategoryClick = (name: string) => {
    setCategory(name);
    setDataLoadCount(1);
    setHasMore(true);
    setData([]);
    getData(name).catch((error) => {
      throw error
    });
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
      })
    }
  }, [])

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
