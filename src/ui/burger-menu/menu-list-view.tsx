import * as React from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/react';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from 'effector-react';
import { Route, Router } from 'router5';

import { ROUTE_NAME_HOME, ROUTE_NAME_SIGH_IN } from '~/router/routes';
import { AnimatedUl } from '~/animations/animated';
import { MenuListItemView } from './menu-list-item-view';

import { $authStore, signOut } from '~/store/auth-store';

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
}) => {
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  const onSignOutClick = () => {
    if (isAuthenticated) {
      signOut();
    }
  };

  return (
    <StyledMotionUl initial="closed" exit="closed" variants={variants}>
      {routes.map(({ name }) => (
        <MenuListItemView
          onClick={toggleOpen}
          key={name}
          name={name}
          router={router}
        />
      ))}
      <MenuListItemView
        onClick={onSignOutClick}
        name={isAuthenticated ? ROUTE_NAME_HOME : ROUTE_NAME_SIGH_IN}
        router={router}
        label={
          <>
            <FontAwesomeIcon
              icon={isAuthenticated ? faSignOutAlt : faSignInAlt}
              size="1x"
              style={{ marginRight: '15px' }}
            />
            {isAuthenticated ? <Trans>Sign Out</Trans> : <Trans>Sign in</Trans>}
          </>
        }
      />
    </StyledMotionUl>
  );
};
