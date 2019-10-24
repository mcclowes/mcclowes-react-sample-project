import React from "react";
import { ContentWrapper } from "./csx";

const Content = props => {
  const { children } = props;

  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
