import React from "react";
import { PaddedWrapper } from "./csx";

const Padded = props => {
  const { space = "p1", children } = props;

  return <PaddedWrapper space={space}>{children}</PaddedWrapper>;
};

export default Padded;
