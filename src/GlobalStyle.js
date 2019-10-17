import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap&subset=latin,latin-ext');

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
