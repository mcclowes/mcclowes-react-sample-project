import React from "react";
import { HeaderWrapper } from "./csx";

const Header = props => {
  const { children } = props;

  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default Header;
