import React, { FC } from 'react';
import { I18n, i18nMark } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { AuthButtonProps } from './types';
import { ROUTE_NAME_HOME, ROUTE_NAME_SIGH_IN } from '~/router/routes';
import authLogo from './logo.png';
import { ButtonStyled, LogoStyled } from './styled';

import { signOut } from '~/store/auth-store';

export const AuthButton: FC<AuthButtonProps> = ({
  isAuthenticated,
  userName = 'Stepan',
  logoUrl = authLogo,
}) => {
  const authPath = isAuthenticated ? ROUTE_NAME_HOME : ROUTE_NAME_SIGH_IN;

  return (
    <I18n>
      {({ i18n }) => (
        <>
          {isAuthenticated ? (
            <ButtonStyled
              onClick={signOut}
              routeName={authPath}
              title={i18n._(i18nMark('Sign out'))}
            >
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
              <LogoStyled>
                <img src={logoUrl} width="100%" alt={userName} />
              </LogoStyled>
            </ButtonStyled>
          ) : (
            <ButtonStyled
              routeName={authPath}
              title={i18n._(i18nMark('Sign in'))}
            >
              <FontAwesomeIcon icon={faSignInAlt} size="lg" />
            </ButtonStyled>
          )}
        </>
      )}
    </I18n>
  );
};
