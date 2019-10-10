import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  min-height: 100%;
`;

const Content = props => {
  const { children, ...rest } = props;

  return <ContentWrapper {...rest}>{children}</ContentWrapper>;
};

export default Content;
