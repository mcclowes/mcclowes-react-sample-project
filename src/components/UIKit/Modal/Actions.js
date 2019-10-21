import React from "react";
import styled from "styled-components/macro";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`;

const Actions = props => {
  const { children } = props;

  return <ActionsWrapper>{children}</ActionsWrapper>;
};

export default Actions;
