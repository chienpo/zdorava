import styled from 'styled-components';

import { DARK_MODE } from 'app/constants/theme';
import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';


export const FooterWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `url(${overlayBlackDot}) repeat scroll 0 0`
      : `url(${overlayWhiteDot}) repeat scroll 0 0`};
  z-index: 1;
`;

export const FooterNav = styled.nav`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto auto auto;
  justify-content: center;
  padding: 45px 0;
  ${({ theme }) => theme.mode === DARK_MODE ? `
    background: rgba(1, 1, 1, 0.95);
  ` : `
    background: rgba(240, 240, 240, 0.1);
  `};
`;

export const FooterCopy = styled.small`
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
  display: block;
  width: 100%;
  color: #808080;
  ${({ theme }) => theme.mode === DARK_MODE ? `
    background: rgba(1, 1, 1, 0.99);
  ` : `
    background: rgba(240, 240, 240, 0.1);
  `};
`;

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #808080;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color ease-out 0.4s;

  &:hover {
    color: red;
  }
`;
