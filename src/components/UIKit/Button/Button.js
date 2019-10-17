import React from "react";
import { ButtonWrapper } from "./csx";

const Button = props => {
  const { children, text, to = "/", doClick } = props;

  return (
    <ButtonWrapper onClick={doClick} to={to}>
      {text}
      {children}
    </ButtonWrapper>
  );
};

export default Button;
