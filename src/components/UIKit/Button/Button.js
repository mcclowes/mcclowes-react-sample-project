import React from "react";
import { ButtonWrapper } from "./csx";
import Padded from "../Padded";

const Button = props => {
  const { children, text, to = "/", theme } = props;
  console.log(theme);
  return (
    <Padded>
      <ButtonWrapper theme={theme} to={to}>
        {text}
        {children}
      </ButtonWrapper>
    </Padded>
  );
};

export default Button;
