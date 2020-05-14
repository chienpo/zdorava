import React from 'react'
import styled, { keyframes } from 'styled-components';

const arrowAnim = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  5% {
    transform: translateX(-0.1rem);
  }
  100% {
    transform: translateX(1rem);
    opacity: 0;
  }
`

const arrowFixedAnim = keyframes`
  5% {
    opacity: 0;
  }
  20% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const ease = `cubic-bezier(.2,1,.3,1)`;

const Wrapper = styled.div`
  display: inline-flex;

  svg {
    width: 80px;
    height: auto;
    margin: 0 2rem;
    cursor: pointer;
    overflow: visible;
    polygon, path {
      transition: all 0.5s ${ease};
      fill: rgba(100,100,100,0.1);
      fill: red;
    }
    &:hover polygon, &:hover path {
      transition: all 1s ${ease};
      fill: #FF4136;
    }

    .arrow {
      animation: ${arrowAnim} 2.5s ${ease} infinite;
    }

    .arrow-fixed {
      animation: ${arrowFixedAnim} 2.5s ${ease} infinite;
    }
  }
`;

export const Arrow = ({ variant }: any) => (
  <Wrapper>
    {variant === 'prev' ? (
      <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
          <polygon
            className="arrow"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
          />
          <polygon
            className="arrow-fixed"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
          />
          <path
            d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"
          />
        </g>
      </svg>
    ) : (
      <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1">
        <g>
          <polygon
            className="arrow"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
          />
          <polygon
            className="arrow-fixed"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
          />
          <path
            d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"
          />
        </g>
      </svg>
    )}
  </Wrapper>
)
