import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import { BLACK } from '~/constants/colors';

const globalStyleCSS = css`
  ${normalize};

  html {
    font-weight: 400;
    font-family: -apple-system, 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${BLACK};
  }
`;

export const GlobalStyle = createGlobalStyle`${globalStyleCSS}`;
