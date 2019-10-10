import React from "react";
import { ButtonWrapper } from "./csx";

const Button = props => {
  const { children, text, to = "/" } = props;

  return (
    <ButtonWrapper to={to}>
      {text}
      {children}
    </ButtonWrapper>
  );
};

export default Button;
