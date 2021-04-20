import { useEffect, createElement, useState, useCallback } from 'react';
import { useRouteNode, useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { FileUrlType } from '~/form-builder/input-field/types';
import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';
import { $authStore } from '~/store/auth-store';

import { ROUTE_NAME_PORTFOLIO } from '~/router/routes';
import { ProjectView } from './project-view';
import { useHttpClient } from '~/hooks/use-http-client';

export const Project = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [previewUrlLoading, setPreviewUrlLoading] = useState<boolean>(false);

  const { route } = useRouteNode('');
  const { router } = useRoute();
  const { sendRequest } = useHttpClient();

  const portfolioSelectedCategory = useStore($portfolioTabsStore);
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const projectId = route.params.id;
  const isEditState = Boolean(route.name === 'project.edit');

  const getDataChunk = useCallback(async () => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/projects/${projectId}`,
        'GET'
      );

      setData([response.data] as PortfolioItemModel[]);
    } catch {
      router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
    }
  }, [sendRequest, router, projectId]);

  useEffect(() => {
    getDataChunk().catch(() => {
      if (route.name === ROUTE_NAME_PORTFOLIO) {
        router.navigate(ROUTE_NAME_PORTFOLIO, {}, { reload: true });
      }
    });
  }, [getDataChunk, router, route.name]);

  const onPreviewChange = (imgUrl: FileUrlType, loadingProgress: boolean) => {
    setPreviewUrlLoading(loadingProgress);
    setPreviewUrl(String(imgUrl));
  };

  return createElement(ProjectView, {
    data: data[0],
    portfolioSelectedCategory,
    isEditState,
    router,
    isAuthenticated,
    onPreviewChange,
    previewUrl,
    previewUrlLoading,
  });
};
