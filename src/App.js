import "./App.css";
import Helmet from "react-helmet";
import Main from "./views/Main";
import React from "react";
import { createGlobalStyle } from "styled-components";
import * as UIKIT from "./components/UIKit";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap&subset=latin,latin-ext');

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Helmet>
        <meta charSet="utf-8" />

        <title>Mcclowes React Sample Project</title>
      </Helmet>

      <Main />

      <UIKIT.Button>dhuasihdas</UIKIT.Button>

      <UIKIT.Padded>dhuasihdas</UIKIT.Padded>

      <UIKIT.Loader>dhuasihdas</UIKIT.Loader>
    </div>
  );
}

export default App;
// todo: routing
// todo: route switch component
// todo: theme provider?
