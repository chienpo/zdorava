import styled from 'styled-components';
import Masonry from 'react-masonry-component';

import { PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND } from 'app/constants/portfolio';

export const StyledMassonry = styled(Masonry)`
  @media (min-width: 600px) {
    display: grid;
    ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? `
        grid-template-columns: 1fr;
      `
        : `
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
      `};
    height: auto !important;
    margin: 0 auto;
    width: 100%;
    grid-row-gap: 10px;
  }
`;
