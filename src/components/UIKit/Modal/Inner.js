import React from "react";
import styled from "styled-components";

const InnerWrapper = styled.div`
  background-color: white;
  margin: 0 !important;
  max-height: 100%;
  max-height: 90vh;
  max-width: 100%;
  min-width: 680px;
  overflow: auto;

  ${props =>
    props["data-modal-size"] === "modal-mini" &&
    `
    min-width: 318px;
    max-width: 318px;
  `};

  ${props =>
    props["data-modal-size"] === "modal-tiny" &&
    `
    max-width: 500px;
    min-width: 500px;
  `};

  ${props =>
    props["data-modal-size"] === "modal-small" &&
    `
    max-width: 680px;
  `};

  ${props =>
    props["data-modal-size"] === "modal-medium" &&
    `
    max-width: 920px;
  `};
`;

const Inner = props => {
  const { children, size, ...rest } = props;

  return (
    <InnerWrapper data-modal-size={size && `modal-${size}`} {...rest}>
      {children}
    </InnerWrapper>
  );
};

export default Inner;
