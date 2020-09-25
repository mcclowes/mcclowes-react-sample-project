import React from "react";
import { DumbWrapper } from "./csx";

const Dumb = (props) => {
  const { children } = props;

  return <DumbWrapper>{children}</DumbWrapper>;
};

export default Dumb;
