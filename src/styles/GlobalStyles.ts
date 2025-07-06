// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
