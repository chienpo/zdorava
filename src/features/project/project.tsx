import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode, useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';

import { ROUTE_NAME_PORTFOLIO, ROUTE_NAME_PROJECT } from '~/router/routes';
import { auth, firebaseInstance } from '~/features/auth';
import { FIREBASE_DATABASE_REF } from '~/constants/api';
import { ProjectView } from './project-view';

export const Project = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);

  const { route } = useRouteNode('');
  const { router } = useRoute();

  const portfolioSelectedCategory = useStore($portfolioTabsStore);

  const projectId = route.params.id;

  const isEditState = Boolean(route.name === 'project.edit');

  const getDataChunk = useCallback(async () => {
    await firebaseInstance
      .database()
      .ref(FIREBASE_DATABASE_REF)
      .orderByChild('alt')
      .equalTo(projectId)
      .once('value')
      .then((snapshot) => {
        const arrayOfKeys = Object.keys(snapshot.val());

        const results = arrayOfKeys.map((key) => snapshot.val()[key]);

        setData(results);
      })
      .catch(() => {
        router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
      });
  }, [projectId, router]);

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

  const onEditProjectSuccess = (values: PortfolioItemModel) => {
    // eslint-disable-next-line no-console
    console.log('On edit project success', values);

    // TODO: Send request to edit project
    setTimeout(() => {
      router.navigate(
        ROUTE_NAME_PROJECT,
        { id: data[0].alt },
        { reload: true }
      );
    }, 1000);
  };

  return createElement(ProjectView, {
    data: data[0],
    portfolioSelectedCategory,
    isEditState,
    router,
    onEditProjectSuccess,
  });
};
