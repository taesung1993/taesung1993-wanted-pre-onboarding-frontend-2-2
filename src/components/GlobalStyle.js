import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Inter', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  button {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;
