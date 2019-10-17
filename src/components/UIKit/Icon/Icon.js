import React from "react";
import icons from "./icons";
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

export default Icon;

export { icons };
