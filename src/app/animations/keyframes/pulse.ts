import { keyframes } from 'styled-components';

export const pulseAnim = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,0,0,0.2),  0 0 0 0 rgba(255,0,0,0.2); }
  40% {
    box-shadow: 0 0 0 50px rgba(255,0,0,0.0),  0 0 0 0 rgba(255,0,0,0.2); }
  80% {
    box-shadow: 0 0 0 50px rgba(255,0,0,0.0),  0 0 0 30px rgba(255,0,0,0); }
  100% {
    box-shadow: 0 0 0 0 rgba(255,0,0,0.0),  0 0 0 30px rgba(255,0,0,0); }
`;

export const pulseAnimWhite = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,255,255,0.2),  0 0 0 0 rgba(255,255,255,0.2); }
  40% {
    box-shadow: 0 0 0 50px rgba(255,255,255,0.0),  0 0 0 0 rgba(255,255,255,0.2); }
  80% {
    box-shadow: 0 0 0 50px rgba(255,255,255,0.0),  0 0 0 30px rgba(255,255,255,0); }
  100% {
    box-shadow: 0 0 0 0 rgba(255,255,255,0.0),  0 0 0 30px rgba(255,255,255,0); }
`;
