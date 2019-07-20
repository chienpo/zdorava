import styled from 'styled-components';

export const PortfolioTabs = styled.div`
  padding: 40px 0 5px;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
`;

export const PortfolioTab = styled.button`
  color: #404040;
  font-weight: normal;
  text-decoration: none;
  padding: 15px 0;
  text-transform: uppercase;
  font-size: 16px;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  border: 1px solid #404040;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: red;
    color: red;
  }

  &.active {
    cursor: default;
    color: white;
    border-color: white;
  }
`;
