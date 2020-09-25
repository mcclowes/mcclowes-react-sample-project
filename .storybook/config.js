import { configure, addDecorator } from "@storybook/react";
import theme from "../src/theme";
import GlobalStyle from "../src/utils/styles/GlobalStyle";
import { ThemeProvider } from "styled-components/macro";
import React from "react";

addDecorator((story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {story()}
    </ThemeProvider>
  );
});

configure(require.context("../src", true, /\.stories\.js$/), module);
