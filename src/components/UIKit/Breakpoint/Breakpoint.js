import React from "react";
import { BreakpointWrapper } from "./csx";
import PropTypes from "prop-types";

const Breakpoint = (props) => {
  const { children, sizes } = props;

  return <BreakpointWrapper sizes={sizes}>{children}</BreakpointWrapper>;
};

Breakpoint.propTypes = {
  children: PropTypes.any,
};

export default Breakpoint;
