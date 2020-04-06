import styled from 'styled-components';
import Masonry from 'react-masonry-component';

import { BLACK, GREEN, RED, SHARK, SHARK_DARK, SHARK_DARK_70, TUNDORA, WHITE, WHITE_20 } from 'app/constants/colors';
import { Button } from 'app/ui/button/button';
import sectionBg  from 'assets/images/wrapper_main.jpg';
import sectionOverlayDark from 'assets/images/overlay_black_small_squares.png';

export const PortfolioTabs = styled.div`
  padding: 40px 0 5px;
  max-width: 80%;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
`;

export const PortfolioTab = styled(Button)`
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

  ${(props: any) => props.more && `background: ${GREEN};`};

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

export const MoreButton = styled.button`
  outline: none;
  bottom: 10px;
  right: 1%;
  padding: 10px 20px;
  cursor: pointer;
  box-sizing: inherit;
  transition: all ease-in-out 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: whitesmoke;
  background: ${SHARK};
  border: 1px solid ${SHARK_DARK};
  opacity: 0.8;
  width: 80%;
  margin: 0 auto;

  &:hover {
    background: ${WHITE};
    color: ${BLACK};
  }
`;

export const ItemLabel = styled.div`
  color: ${WHITE};
  font-family: Orbitron-Medium, sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  position: absolute;
  right: -100%;
  padding: 5px;
  outline: 0;
  transition: all 0.8s ease-in-out;
  background: ${RED};
  opacity: 0.8;
  border-right: 1px solid transparent;
`;

export const ItemDescription = styled.div`
  position: absolute;
  bottom: 10px;
  left: -250%;
  margin-bottom: 0;
  transition: all 0.8s ease-in-out;
  background: ${RED};
  opacity: 0.8;
  color: ${WHITE};
`;

export const SectionPortfolio = styled.section`
  background: url(${sectionBg})center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
`;

export const PortfolioOverlay = styled.div`
  padding: 0 0;
  background: ${SHARK_DARK_70} url(${sectionOverlayDark}) repeat scroll 0 0;
  height: 100%;
`;

export const StyledMassonry = styled(Masonry)`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    max-width: 80%;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  height: auto !important;
  margin: 0 auto;
  background: ${BLACK};
`;

export const StyledItem = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative !important;
  left: auto !important;
  top: auto !important;
  transform: none !important;
  opacity: 1;
  width: 100%;

  @media (min-width: 600px) {
    &:nth-child(1),
    &:nth-child(11),
    &:nth-child(21) {
      grid-column: span 2;
      grid-row: span 2;
      opacity: 0.1;
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
      opacity: 0.1;
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

  &:hover {
    opacity: 1;

    ${ItemLabel} {
      right: 0;
    }
    ${ItemDescription} {
      left: 0;
    }
  }
`;

export const ItemLink = styled.a`
  cursor: pointer;
`;

export const ItemOrientationType = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  transition: all ease-in-out 0.8s;
  object-fit: cover;
  filter: grayscale(100);
  opacity: 1;
`;

export const ItemFigure = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid white;
  overflow: hidden;
  transition: all 0.8s ease 0s;

  &:before {
    background: ${WHITE_20} none repeat scroll 0 0;
    box-sizing: border-box;
    content: '';
    height: 100%;
    left: -10%;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: scale3d(3.5, 3, 2) rotate3d(0, 0, 1, 135deg)
      translate3d(0px, 100%, 0px);
    transition: transform 0.8s ease 0s;
    visibility: hidden;
    width: 120%;
    z-index: 1;
  }

  &:hover {
    border: 1px solid red;

    &:before {
      opacity: 1;
      transform: scale3d(1.9, 1.4, 1) rotate3d(0, 0, 1, 135deg)
        translate3d(0px, -130%, 0px);
      visibility: initial;
    }

    ${ItemImage} {
      filter: grayscale(0);
      opacity: 1;
    }
  }
`;
