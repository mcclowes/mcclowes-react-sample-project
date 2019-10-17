import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Helmet from "react-helmet";
import React from "react";
import Routes from "./Routes";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Helmet>
        <meta charSet="utf-8" />

        <title>Mcclowes React Sample Project</title>
      </Helmet>

      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
// todo: routing
// todo: route switch component
