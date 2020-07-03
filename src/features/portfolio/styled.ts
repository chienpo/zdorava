import styled from 'styled-components';

import { BLACK, WHITE } from 'constants/colors';

export const SectionPortfolio = styled.section`
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  background: ${BLACK};
  padding: 80px 15px 0;
`;

export const PortfolioOverlay = styled.div``;

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
  color: ${WHITE};
`;
