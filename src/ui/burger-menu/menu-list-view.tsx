import * as React from 'react';
import styled from 'styled-components';

import { Route, Router } from 'router5';

import {
  ROUTE_NAME_PORTFOLIO_CATEGORY,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from '~/router/routes';
import { AnimatedUl } from '~/animations/animated';
import { MenuListItemView } from './menu-list-item-view';

const StyledMotionUl = styled(AnimatedUl)`
  display: flex;
  flex-direction: column;
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface Props {
  routes: Route[];
  toggleOpen: () => void;
  router: Router;
}

export const MenuListView: React.FC<Props> = ({
  toggleOpen,
  routes,
  router,
}) => (
  <StyledMotionUl initial="closed" exit="closed" variants={variants}>
    {routes
      .filter(
        ({ name }) =>
          name !== ROUTE_NAME_PORTFOLIO_PROJECT &&
          name !== ROUTE_NAME_PORTFOLIO_CATEGORY
      )
      .map(({ name }) => (
        <MenuListItemView
          onClick={toggleOpen}
          key={name}
          name={name}
          router={router}
        />
      ))}
  </StyledMotionUl>
);
