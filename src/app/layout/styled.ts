import styled from 'styled-components';

import { WHITE } from '../constants/colors';

export const AppContent = styled.div`
  overflow: hidden;
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: minmax(320px, 1fr);
  grid-template-rows: auto 1fr auto;
  background: ${WHITE};
  width: 100vw;
`;

export const AppBackground = styled.div`
  background: ${WHITE};
`;

export const Header = styled.header`
  z-index: 5;
`;
