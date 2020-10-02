import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: "Cantarell", sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
