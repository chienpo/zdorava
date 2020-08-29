import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode, useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';

import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';

import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { auth, firebaseInstance } from '~/features/auth';
import { FIREBASE_DATABASE_REF } from '~/constants/api';
import { SingleProjectView } from './single-project-view';

export const SingleProject = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);

  const { route } = useRouteNode('');
  const { router } = useRoute();

  const portfolioSelectedCategory = useStore($portfolioTabsStore);

  const projectName = route.params.id;

  const getDataChunk = useCallback(async () => {
    firebaseInstance
      .database()
      .ref(FIREBASE_DATABASE_REF)
      .orderByChild('alt')
      .equalTo(projectName)
      .once('value')
      .then((snapshot) => {
        const arrayOfKeys = Object.keys(snapshot.val());

        const results = arrayOfKeys.map((key) => snapshot.val()[key]);

        setData(results);
      })
      .catch(() => {
        router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
      });
  }, [projectName, router]);

  useEffect(() => {
    auth();
  }, []);

  useEffect(() => {
    getDataChunk().catch(() => {
      if (route.name === ROUTE_NAME_PORTFOLIO) {
        router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
      }
    });
  }, [getDataChunk, router, route.name]);

  return createElement(SingleProjectView, {
    data: data[0],
    portfolioSelectedCategory,
  });
};
