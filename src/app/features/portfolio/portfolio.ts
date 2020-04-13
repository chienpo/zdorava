import { createElement, useState, useEffect, FC } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import { FIREBASE_DATABASE_REF, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL } from '../../constants/api';
import {
  PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME, PORTFOLIO_CATEGORY_TAB_NAME_ALL,
  PORTFOLIO_CATEGORY_TAB_NAME_ART,
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
} from '../../constants/portfolio';
import { PageLoader } from '../../ui/page-loader/page-loader';
import { PortfolioView } from './portfolio-view';

interface PortfolioItems {
  alt: string;
  category: string;
  description: string;
  src: string;
  name: string;
}

interface Props {
  data: PortfolioItems[];
  activeCategoryPayload: (name: string) => void;
  getNextPortfolioDate: () => void;
  hasMore: boolean;
  selectedCategory: string;
}

export const Portfolio: FC<Props> = () => {
  // eslint-disable-next-line max-len
  const [data, setFirebaseData] = useState<PortfolioItems[]>([]);
  const [referenceToOldestKey, setReferenceToOldestKey] = useState<string>('');
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedCategory, setCategory] = useState<string>(PORTFOLIO_CATEGORY_TAB_NAME_ALL);

  const DEFAULT_DATA_LIMIT = 6;

  const [dataLoadCount, setDataLoadCount] = useState<number>(0);

  const prepareCategoryName = (name: string) => {
    let preparedCategoryName;
    switch (name) {
      case PORTFOLIO_CATEGORY_TAB_NAME_ART:
        preparedCategoryName = PORTFOLIO_CATEGORY_TAB_NAME_ART;
        break;
      case PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND:
        preparedCategoryName = PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND;
        break;
      default:
        preparedCategoryName = PORTFOLIO_CATEGORY_TAB_NAME_ART
    }

    return preparedCategoryName;
  };

  const getFirebaseData = (categoryName: string) => {
    setDataLoadCount(prevState => prevState + 1);
    const preparedCategoryNames = prepareCategoryName(categoryName);

    firebase.database().ref(FIREBASE_DATABASE_REF)
      .orderByChild("category")
      .equalTo(preparedCategoryNames)
      .limitToLast(DEFAULT_DATA_LIMIT)
      .once('value')
      .then(snapshot => {
        // changing to reverse chronological order (latest first)
        const arrayOfKeys = Object.keys(snapshot.val())
          .reverse();

        // transforming to array
        const results = arrayOfKeys
          .map((key) => snapshot.val()[key]);

        setFirebaseData(results);
        setReferenceToOldestKey(arrayOfKeys[arrayOfKeys.length-1]);
        setPageLoading(false)
      })
      .catch((error) => {
        throw error
      });
  };

  const getNextFirebaseData = () => {
    setDataLoadCount(prevState => prevState + 1);

    firebase.database().ref(FIREBASE_DATABASE_REF)
      .orderByKey()
      .endAt(referenceToOldestKey)
      .limitToLast((dataLoadCount * DEFAULT_DATA_LIMIT) + 1)
      .once('value')
      .then((snapshot) => {
        const arrayOfKeys = Object.keys(snapshot.val())
          .reverse()
          .slice(1);

        const results = arrayOfKeys
          .map((key) => snapshot.val()[key]);

        // eslint-disable-next-line max-len
        const filteredResults = selectedCategory !== PORTFOLIO_CATEGORY_TAB_NAME_ALL
          ? results.filter(({ category }) => category === selectedCategory)
          : results;

        setFirebaseData([...data, ...filteredResults]);
        setReferenceToOldestKey(arrayOfKeys[arrayOfKeys.length-1]);

        // console.log(firebaseData.length) // 22 should be category.data.length
        const maxDataLength = data.some(({category}) => category
          .includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)) ? 7 : 15;

        if (data.length >= maxDataLength) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      })
      .catch((error) => {
        throw error
      });
  };

  const onCategoryClick = (name: string) => {
    setCategory(name);
    setDataLoadCount(0);
    setHasMore(true);
    setFirebaseData([]);
    getFirebaseData(name);
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
      });
    }
    getFirebaseData(PORTFOLIO_CATEGORY_DEFAULT_TAB_NAME);
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
