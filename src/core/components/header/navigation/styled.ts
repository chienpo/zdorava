import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import { DARK_MODE } from 'constants/theme';
import { BLACK_30, GRAY, RED, WHITE } from 'constants/colors';

export const LanguageSwitchBox = styled.div`
  z-index: 0;
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

export const NavigationList = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 170px;
`;

export const BaseLinkStyled = styled(BaseLink)`
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  color: ${GRAY};
  font-size: 14px;
  line-height: 70px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0 35px;
  border-bottom: 1px solid transparent;
`;

export const NavigationWrapper = styled.div`
  background: ${({ theme }) =>
    theme === DARK_MODE
      ? `${BLACK_30};`
      : `
        ${WHITE};
      `};
  display: grid;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  ${BaseLinkStyled} {
    ${({ theme }) =>
      theme === DARK_MODE
        ? `
        color: ${GRAY};

          &.active {
            color: ${WHITE};
            border-bottom: 1px solid ${WHITE};

            &:hover {
              color: ${WHITE};
              border-color: ${WHITE};
            }
          }

          &:hover {
            color: ${RED};
            border-color: ${RED};
          }
        `
        : `
          &.active {
            color: ${RED};
            border-bottom: 1px solid ${RED};

            &:hover {
              color: ${RED};
              border-color: ${RED};
            }
          }

          &:hover {
            color: ${RED};
            border-color: ${RED};
          }
        `};
  }
`;
