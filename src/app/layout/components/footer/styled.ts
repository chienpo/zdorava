import styled from 'styled-components';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import { DARK_MODE } from '../../../constants/theme';
import {
  GRAY,
  RED,
  WHITE_95,
  WHITE_SMOKE_10,
} from '../../../constants/colors';


export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `url(${overlayBlackDot}) repeat scroll 0 0`
      : `${WHITE_95} url(${overlayWhiteDot}) repeat scroll 0 0`};
  z-index: 1;
`;

export const FooterNav = styled.nav`
  display: grid;
  grid-column-gap: 25px;
  grid-template-columns: auto auto auto;
  justify-content: center;
  padding: 45px 0;
`;

export const FooterCopy = styled.small`
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
  display: block;
  width: 100%;
  color: ${GRAY};
  background: ${WHITE_SMOKE_10};
`;

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  color: ${GRAY};
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color ease-out 0.4s;

  &:hover {
    color: ${RED};
  }
`;
