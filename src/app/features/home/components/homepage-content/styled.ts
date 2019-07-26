import styled from 'styled-components';

import overlayBlackDot from 'assets/images/overlay_black.png';
import overlayWhiteDot from 'assets/images/overlay_white.png';
import { DARK_MODE } from 'app/constants/theme';

export const HomepageContentWrapper = styled.div`
  background: ${({ theme }) =>
    theme.mode === DARK_MODE
      ? `rgba(1, 1, 1, 0.9) url(${overlayBlackDot}) repeat scroll 0 0;`
      : `rgba(255, 255, 255, 0.90) url(${overlayWhiteDot}) repeat scroll 0 0;`};

  height: 100%;
  display: flex;
  align-items: flex-end;
  z-index: 1;
`;

export const HomepageHGroup = styled.div`
  opacity: 0.8;
  padding: 20px 0 100px;
  display: block;
  width: 100%;
`;

export const HomepageTitle = styled.h1`
  font-family: 'Orbitron-Bold', sans-serif;
  color: darkslategrey;
  font-size: 65.5px;
  line-height: 80px;
  letter-spacing: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    color: white;
    margin-left: 15px;
    display: inline;
  }
`;

export const HomepageSubtitle = styled.div`
  font-family: 'Orbitron-Medium', sans-serif;
  text-align: center;
  font-size: 15.5px;
  line-height: 18px;
  letter-spacing: 5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  height: 18px;
`;
