import styled from 'styled-components';

import { ROUTE_NAME_ABOUT } from '~/router/routes';
import { BLACK, RED, RED_70, WHITE } from '~/constants/colors';
import { ThemeModes } from '~/constants/theme';
import { pulseAnim, pulseAnimWhite } from '~/animations/keyframes/pulse';

export const PortfolioTab = styled.button`
  @media (min-width: 991px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 400px) {
    padding-left: 55px;
  }

  position: relative;
  display: block;
  padding-left: 45px;
  color: ${({ theme }) => (theme.mode === ThemeModes.Dark ? WHITE : BLACK)};
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  transition: color 0.6s;

  &::before {
    position: absolute;
    top: 50%;
    ${({ title }) => (title === ROUTE_NAME_ABOUT ? 'right: 0' : 'left: 0')};

    display: block;
    width: 22px;
    height: 22px;
    border: 8px solid
      ${({ theme }) => (theme.mode === ThemeModes.Dark ? WHITE : BLACK)};
    border-radius: 50%;
    transform: translateY(-50%);
    transition: border-color 0.6s;
    animation: ${pulseAnimWhite} 5s linear infinite;
    content: '';
  }

  &.active {
    color: ${RED};

    &::before,
    &::after {
      border-color: ${RED};
    }
  }

  &:focus {
    color: ${RED_70};

    &::before,
    &::after {
      border-color: ${RED_70};
    }
  }

  &:hover {
    color: ${RED};
    background: none;
    cursor: pointer;

    &::before,
    &::after {
      border-color: ${RED};
      animation: ${pulseAnim} 2s linear infinite;
    }
  }
`;
