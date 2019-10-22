import icons from "./icons";
import PropTypes from "prop-types";
import React from "react";
import { IconWrapper } from "./csx";

const Icon = props => {
  const { path, width, height, icon } = props;

  return (
    <IconWrapper
      viewBox="0 0 32 32"
      focusable="false"
      width={width}
      height={height}
    >
      {icon ? <path d={icons[icon]} /> : <path d={path} />}
    </IconWrapper>
  );
};

Icon.propTypes = {
  height: PropTypes.any,
  icon: PropTypes.string,
  path: PropTypes.string,
  width: PropTypes.any
};

export default Icon;

export { icons };
