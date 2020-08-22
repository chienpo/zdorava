import styled from 'styled-components';

import { ROUTE_NAME_ABOUT } from '~/router/routes';
import { BLACK, RED, RED_70, WHITE } from '~/constants/colors';
import { DARK_MODE } from '~/constants/theme';
import { pulseAnim, pulseAnimWhite } from '~/animations/keyframes/pulse';

export const ButtonCircleStyled = styled.button`
  @media (min-width: 991px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 400px) {
    padding-left: 55px;
  }

  font-size: 13px;
  display: block;
  position: relative;
  padding-left: 45px;
  text-transform: uppercase;
  color: ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
  transition: color 0.6s;
  background: transparent;
  border: none;
  font-weight: bold;

  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 8px solid
      ${({ theme }) => (theme.mode === DARK_MODE ? WHITE : BLACK)};
    ${({ title }) => (title === ROUTE_NAME_ABOUT ? 'right: 0' : 'left: 0')};
    top: 50%;
    transform: translateY(-50%);
    transition: border-color 0.6s;
    animation: ${pulseAnimWhite} 5s linear infinite;
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
    cursor: pointer;
    background: none;
    color: ${RED};

    &::before,
    &::after {
      border-color: ${RED};
      animation: ${pulseAnim} 2s linear infinite;
    }
  }
`;
