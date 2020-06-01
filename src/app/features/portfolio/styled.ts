import styled from 'styled-components';

import { BLACK, WHITE } from 'app/constants/colors';

export const SectionPortfolio = styled.section`
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
`;

export const PortfolioOverlay = styled.div`
  @media (min-width: 767px) {
    padding: 0;
  }

  padding: 0 15px;
  background: ${BLACK};
  height: 100%;
`;

export const ItemsLoadingStateDescription = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
`;

export const ItemsLoadingSpinnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  height: 50vh;
  color: ${WHITE};
`;
