import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const CloseWrapper = styled.div`
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

const CloseButton = styled.button`
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: flex;
  outline: none;
  padding: 0.5em;

  &:hover {
    background: #eee;
  }
`;

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
