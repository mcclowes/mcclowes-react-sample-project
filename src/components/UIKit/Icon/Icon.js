import React from "react";
import styled from "styled-components";
import Icons from "./Icons";

const IconWrapper = styled.svg`
  width: ${props => (props.width ? props.width : "16px")};
  height: ${props => (props.height ? props.height : "16px")};
`;

const Icon = props => {
  const { className, path, width, height, ...rest } = props;

  return (
    <IconWrapper
      viewBox="0 0 32 32"
      focusable="false"
      width={width}
      height={height}
      {...rest}
    >
      <path d={path} />
    </IconWrapper>
  );
};

export default Icon;

export { Icons };
