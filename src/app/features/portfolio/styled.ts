import styled from 'styled-components';

import { SHARK_DARK_70, WHITE_SMOKE, } from 'app/constants/colors';
import sectionBg  from 'assets/images/wrapper_main.jpg';
import sectionOverlayDark from 'assets/images/overlay_black_small_squares.png';

export const SectionPortfolio = styled.section`
  background: url(${sectionBg})center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
`;

export const PortfolioOverlay = styled.div`
  @media (min-width: 767px) {
    padding: 0;
  }

  padding: 0 15px;
  background: ${SHARK_DARK_70} url(${sectionOverlayDark}) repeat scroll 0 0;
  height: 100%;
`;

export const ItemsLoadingStateDescription = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${WHITE_SMOKE};
`;
