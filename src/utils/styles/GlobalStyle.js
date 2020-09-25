import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap&subset=latin,latin-ext');

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
