import React from "react";
import styled from "styled-components";
import Icon, { Icons } from "../Icon";

const CloseWrapper = styled("div")`
  position: absolute;
  right: 10px;
  top: 10px;
  outline: none;
  z-index: 5;

  &,
  * {
    cursor: pointer;
  }
`;

const Close = props => {
  const { icon, onClick, ...rest } = props;

  return (
    <CloseWrapper {...rest}>
      {icon ? (
        icon
      ) : (
        <button onClick={onClick}>
          <Icon path={Icons.CLOSE} />
        </button>
      )}
    </CloseWrapper>
  );
};

export default Close;
