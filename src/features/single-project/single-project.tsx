import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode, useRoute } from 'react-router5';

import { PortfolioItemModel } from 'models/portfolio-item.model';

import portfolioData from 'features/portfolio/portfolio-data.json';
import { ROUTE_NAME_PORTFOLIO } from 'router/routes';
import { auth, firebaseInstance } from 'features/auth';
import { FIREBASE_DATABASE_REF } from 'constants/api';
import { SingleProjectView } from './single-project-view';

export const SingleProject = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  const { route } = useRouteNode('');
  const { router } = useRoute();

  const projectName = route.params.id;

  const isProject = portfolioData.portfolio.find(({ alt }) =>
    alt.includes(projectName)
  );

  const getDataChunk = useCallback(async () => {
    firebaseInstance
      .database()
      .ref(FIREBASE_DATABASE_REF)
      .orderByChild('alt')
      .equalTo(projectName)
      .once('value')
      .then(snapshot => {
        const arrayOfKeys = Object.keys(snapshot.val());

        const results = arrayOfKeys.map(key => snapshot.val()[key]);

        setData(results);
        setPageLoading(false);
      })
      .catch(error => {
        throw error;
      });
  }, [projectName]);

  useEffect(() => {
    auth();
  }, []);

  useEffect(() => {
    if (isProject) {
      getDataChunk().catch(error => {
        throw error;
      });
    } else {
      router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
    }
  }, [getDataChunk, router, isProject]);

  if (pageLoading) {
    return null;
  }

  return createElement(SingleProjectView, { data: data[0] });
};
