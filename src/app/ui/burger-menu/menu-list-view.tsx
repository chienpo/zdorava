import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Route } from 'models/route.model';
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
  router: any;
}

export const MenuListView: React.FC<Props> = ({ routes, router }) => (
  <StyledMotionUl variants={variants}>
    {routes.map(({ name, title }, index) => (
      <MenuListItemView
        key={name}
        i={index}
        name={name}
        router={router}
        title={title}
      />
    ))}
  </StyledMotionUl>
);
