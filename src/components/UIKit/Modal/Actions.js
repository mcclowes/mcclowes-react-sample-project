import React from "react";
import styled from "styled-components";

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Actions = props => {
  const { children, ...rest } = props;

  return <ActionsWrapper {...rest}>{children}</ActionsWrapper>;
};

export default Actions;
