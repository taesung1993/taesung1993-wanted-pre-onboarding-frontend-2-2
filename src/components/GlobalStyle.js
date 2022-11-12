import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto';
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  g.axis {
    &.y {
      g {
        &:first-of-type {
          text {
            display: none;
          }
        }

        text {
          text-anchor: start;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          transform: translateY(10px);
          color: #94A2AD;
        }
        line {
          stroke-width: 0.5;
          stroke: #94A2AD;
          /* display: none; */
        }
      }
    }

    path {
      display: none;
    }
  }
`;

export default GlobalStyle;
