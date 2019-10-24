import React from "react";
import { ActionsWrapper } from "./csx";

const Actions = props => {
  const { children } = props;

  return <ActionsWrapper>{children}</ActionsWrapper>;
};

export default Actions;
