import React from "react";
import { SmartWrapper } from "./csx";

const Smart = props => {
  const { children } = props;

  return <SmartWrapper>{children}</SmartWrapper>;
};

export default Smart;
