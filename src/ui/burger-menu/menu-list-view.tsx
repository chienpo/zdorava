import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Route } from 'models/route.model';

import {
  ROUTE_NAME_PORTFOLIO_CATEGORY,
  ROUTE_NAME_PORTFOLIO_PROJECT,
} from 'router/routes';
import { MenuListItemView } from './menu-list-item-view';

const StyledMotionUl = styled(motion.ul)`
  padding: 25px 15px;
  position: absolute;
  top: 100px;
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
  router: any;
}

export const MenuListView: React.FC<Props> = ({
  toggleOpen,
  routes,
  router,
}) => (
  <nav>
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
  </nav>
);
