import React from "react";
import { InnerWrapper } from "./csx";

const Inner = props => {
  const { children, size = "small" } = props;

  return <InnerWrapper data-modal-size={size}>{children}</InnerWrapper>;
};

export default Inner;
