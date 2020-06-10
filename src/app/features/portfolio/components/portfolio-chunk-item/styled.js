import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router5';

import { RED, WHITE } from 'app/constants/colors';
import {
  PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND,
  CHUNK_TYPE_ONE,
  CHUNK_TYPE_TWO,
  CHUNK_TYPE_THREE,
} from 'app/constants/portfolio';
import { mirrorEffect } from 'helpers/mirror-effect';

export const ItemCategoryLabel = styled.span`
  margin-left: 10px;
`;

export const ItemTitle = styled.h4`
  transition: left 0.2s, left 0.2s;
  background: ${RED};
  color: ${WHITE};
  padding: 5px 10px;
`;

export const ItemCategoryName = styled.span`
  color: ${WHITE};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  outline: 0;
  transition: all 0.8s ease-in-out;
  background: ${RED};
  border-right: 1px solid transparent;
  padding: 5px 10px;
`;

export const ItemOrientationType = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const ItemImage = styled.img`
  display: block;
  width: 100%;
  max-width: none;
  transition: opacity 0.8s;
  object-fit: cover;

  /* fade image in after load */
  &.lazyload,
  &.lazyloading {
    opacity: 0;
  }

  /* fade image in while loading and show a spinner as background image (good for progressive images) */
  &.lazyload {
    opacity: 0;
  }

  &.lazyloaded {
    opacity: 1;
    transition: opacity 4s;
  }

  &.lazyloading {
    background: yellow no-repeat center;
  }

  /* other */
  &.blur-up {
    filter: blur(5px) grayscale(0);
    visibility: hidden;
    transition: filter 0.8s visibility 0.8s;
  }

  &.blur-up.lazyloaded {
    visibility: visible;
    filter: blur(0) grayscale(100);
  }
`;

export const Item = styled(motion.div)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;

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
    className.includes(CHUNK_TYPE_ONE) &&
    `
    @media (min-width: 600px) {
      &:nth-child(1) {
        opacity: 0.3;
        grid-column: span 2 / auto;
        grid-row: span 2 / auto;
      }

      &:nth-child(2) {
        grid-column: span 3 / auto;
        grid-row: span 2 / auto;
      }
    }
  `}

  ${({ className }) =>
    !className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) &&
    className.includes(CHUNK_TYPE_TWO) &&
    `
    @media (min-width: 600px) {
      &:nth-child(3),
      &:nth-child(4) {
        grid-column: span 2 / auto;
      }
    }
  `}

  ${({ className }) =>
    !className.includes(PORTFOLIO_CATEGORY_TAB_NAME_FRONTEND) &&
    className.includes(CHUNK_TYPE_THREE) &&
    `
    @media (min-width: 600px) {
      &:nth-child(1) {
        grid-column: span 1 / auto;
        grid-row: span 2 / auto;
      }
      &:nth-child(2) {
        grid-column: span 3 / auto;
        grid-row: span 2 / auto;
      }

      &:nth-child(3),
      &:nth-child(4) {
        grid-column: span 2 / auto;
      }
    }
  `}

  ${ItemCategoryName} {
    position: absolute;
    top: 20px;
    right: -100%;
    opacity: 0;
    transition: left 0.4s, right 0.4s, opacity 1.6s;
  }

  ${ItemTitle} {
    position: absolute;
    bottom: 20px;
    left: -100%;
    opacity: 0;
    transition: left 0.4s, opacity 1.6s;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    border: 1px solid ${RED};

    ${ItemCategoryName} {
      right: 0;
      opacity: 1;
    }

    ${ItemTitle} {
      left: 0;
      opacity: 1;
    }
  }
`;

export const ItemFigure = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transition: all 0.8s ease 0s;

  &:hover {
    ${mirrorEffect}

    ${ItemImage} {
      filter: grayscale(0);
      opacity: 1;
    }
  }
`;
