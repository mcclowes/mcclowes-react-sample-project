import React from "react";
import styled from "styled-components/macro";

const ContentWrapper = styled.div`
  min-height: 100%;
  padding: 1em;
`;

const Content = props => {
  const { children } = props;

  return <ContentWrapper>{children}</ContentWrapper>;
};

export default Content;
