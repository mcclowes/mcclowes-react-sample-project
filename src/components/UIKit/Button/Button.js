import PropTypes from "prop-types";
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

Button.propTypes = {
  children: PropTypes.any,
  doClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string
};

export default Button;
