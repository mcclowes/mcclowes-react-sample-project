import React from "react";
import { ButtonWrapper } from "./csx";
import Padded from "../Padded";

const Button = props => {
  const { children, text, to = "/" } = props;

  return (
    <Padded>
      <ButtonWrapper to={to}>
        {text}
        {children}
      </ButtonWrapper>
    </Padded>
  );
};

export default Button;
