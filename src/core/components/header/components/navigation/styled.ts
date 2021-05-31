import styled from 'styled-components';
import { BaseLink } from 'react-router5';

import { ThemeModes } from '~/constants/theme';
import { GRAY, RED, RED_70, WHITE } from '~/constants/colors';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 335px;
  list-style: none;
`;

export const BaseLinkStyled = styled(BaseLink)`
  display: block;
  padding: 0 35px;
  color: ${GRAY};
  font-size: 14px;
  line-height: 70px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  outline: none;
  transition: all ease-in-out 0.4s;

  &:focus {
    color: ${RED_70};
    font-weight: 600;
  }

  ${({ theme }) =>
    theme.mode === ThemeModes.Dark
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
`;
