import styled from 'styled-components';

import { RED, WHITE } from 'app/constants/colors';
import { PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND } from 'app/constants/portfolio';
import { mirrorEffect } from 'app/css-helpers';

export const ItemLabel = styled.div`
  color: ${WHITE};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  position: absolute;
  right: -100%;
  outline: 0;
  transition: all 0.8s ease-in-out;
  background: ${RED};
  opacity: 0.8;
  border-right: 1px solid transparent;
  width: 80%;
  top: 20px;
  padding: 5px 10px;
`;

export const ItemName = styled.span`
  margin-left: 10px;
`;

export const ItemDescription = styled.div`
  position: absolute;
  bottom: 20px;
  left: -100%;
  transition: all 0.8s ease-in-out;
  background: ${RED};
  opacity: 0.8;
  color: ${WHITE};
  width: 90%;
  padding: 5px 10px;
`;

export const ItemOrientationType = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  display: block;
  width: 100%;
  max-width: none;
  transition: opacity 0.8s;
  object-fit: cover;
  filter: grayscale(100);
  opacity: 1;
`;

export const Item = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative !important;
  left: auto !important;
  top: auto !important;
  transform: none !important;
  opacity: 1;
  width: 100%;

  ${ItemOrientationType} {
    padding-bottom: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) ? '0' : '100%'};
    height: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? '50vh'
        : '100%'};
  }

  ${ItemImage} {
    height: ${({ className }) =>
      className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND)
        ? 'auto'
        : '100%'};
  }

  ${({ className }) =>
    !className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) &&
    `
    @media (min-width: 600px) {
      &:nth-child(1),
      &:nth-child(11),
      &:nth-child(21) {
        grid-column: span 2;
        grid-row: span 2;
        opacity: 0.3;
      }
      &:nth-child(2),
      &:nth-child(12),
      &:nth-child(22) {
        grid-column: span 3;
        grid-row: span 2;
      }
      &:nth-child(8),
      &:nth-child(18),
      &:nth-child(28) {
        grid-column: span 2;
        opacity: 0.3;
      }
      &:nth-child(7),
      &:nth-child(17),
      &:nth-child(27) {
        grid-column: span 2;
      }
      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(19),
      &:nth-child(20),
      &:nth-child(29),
      &:nth-child(30) {
        grid-column: span 3;
      }
    }
  `};

  &:hover {
    cursor: pointer;
    opacity: 1;

    ${ItemLabel} {
      right: 0;
    }
    ${ItemDescription} {
      left: 0;
    }
  }
`;

export const ItemFigure = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid ${WHITE};
  overflow: hidden;
  transition: all 0.8s ease 0s;

  &:hover {
    border: 1px solid red;

    ${mirrorEffect}

    ${ItemImage} {
      filter: grayscale(0);
      opacity: 1;
    }
  }
`;
