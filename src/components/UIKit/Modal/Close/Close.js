import React from "react";
import Icon from "../../Icon";
import { CloseWrapper, CloseButton } from "./csx";

const Close = props => {
  const { icon, onClick } = props;

  return (
    <CloseWrapper>
      {icon ? (
        icon
      ) : (
        <CloseButton onClick={onClick}>
          <Icon icon="CLOSE" />
        </CloseButton>
      )}
    </CloseWrapper>
  );
};

export default Close;
