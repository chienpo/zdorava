import { useEffect, createElement, useState } from 'react';
import { useRouteNode, useRoute } from 'react-router5';
import { useStore } from 'effector-react';

import { PortfolioResponseDataModel } from '~/models/portfolio-response-data.model';
import { PortfolioItemModel } from '~/models/portfolio-item.model';
import { $portfolioTabsStore } from '~/store/portfolio-tabs-store';
import { $authStore } from '~/store/auth-store';

import { useHttp } from '~/hooks';
import { ProjectView } from './project-view';
import { PROJECTS_URL } from '~/constants/api';
import { transformObjectValuesIntoArrayOfValues } from '~/features/portfolio/helpers';
import { SomethingWentWrong } from '~/features/something-went-wrong';

export const Project = () => {
  const [data, setData] = useState<PortfolioItemModel[]>([]);

  const { route } = useRouteNode('');
  const { router } = useRoute();

  const portfolioSelectedCategory = useStore($portfolioTabsStore);
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const projectId = route.params.id;

  const isEditState = Boolean(route.name === 'project.edit');

  const { requestError, sendRequest } = useHttp();

  const sendRequestCallback = (response: PortfolioResponseDataModel) => {
    const dataUpdated = transformObjectValuesIntoArrayOfValues(response);
    setData(dataUpdated);
  };

  useEffect(() => {
    sendRequest(
      {
        url: `${PROJECTS_URL}`,
        method: 'GET',
        headers: null,
        body: null,
        queries: {
          orderBy: 'imageName',
          equalTo: projectId,
        },
      },
      sendRequestCallback
    ).then(() => {});
  }, [projectId, sendRequest]);

  if (requestError) {
    return createElement(SomethingWentWrong);
  }

  return createElement(ProjectView, {
    data: data[0],
    portfolioSelectedCategory,
    isEditState,
    router,
    isAuthenticated,
  });
};
