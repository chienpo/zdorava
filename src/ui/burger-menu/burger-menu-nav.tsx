import * as React from 'react';
import { Trans } from '@lingui/macro';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStore } from 'effector-react';
import { Route, Router } from 'router5';

import { ROUTE_NAME_HOME, ROUTE_NAME_SIGH_IN } from '~/router/routes';
import { BurgerMenuNavItem } from './burger-menu-nav-item';

import { $authStore, signOut } from '~/store/auth-store';
import { NavStyled, StyledMotionUl } from './styled';

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

export const BurgerMenuNav: React.FC<Props> = ({
  toggleOpen,
  routes,
  router,
}) => {
  const { userId } = useStore($authStore);
  const isAuthenticated = Boolean(userId);

  // TODO: Check action if user is NOT authenticated
  const onSignOutClick = () => {
    if (isAuthenticated) {
      signOut();
    }
  };

  return (
    <NavStyled>
      <StyledMotionUl
        animate="open"
        initial="closed"
        exit="closed"
        variants={variants}
      >
        {routes.map(({ name }) => (
          <BurgerMenuNavItem
            onClick={toggleOpen}
            key={name}
            name={name}
            router={router}
          />
        ))}
        <BurgerMenuNavItem
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
              {isAuthenticated ? (
                <Trans>Sign Out</Trans>
              ) : (
                <Trans>Sign in</Trans>
              )}
            </>
          }
        />
      </StyledMotionUl>
    </NavStyled>
  );
};
