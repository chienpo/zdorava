import styled from 'styled-components';

import { RED, TUNDORA, WHITE } from 'app/constants/colors';

export const PortfolioTabs = styled.div`
  padding: 40px 0 5px;
  max-width: 80%;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
`;

export const PortfolioTab = styled.button`
  color: ${TUNDORA};
  font-weight: normal;
  text-decoration: none;
  padding: 15px 0;
  font-size: 16px;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  border: 1px solid ${TUNDORA};
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: ${RED};
    color: ${RED};
  }

  &.active {
    cursor: default;
    color: ${WHITE};
    border-color: ${WHITE};
  }
`;
