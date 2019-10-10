import React from "react";
import styled from "styled-components";

const PaddedWrapper = styled("div")`
  ${props => (props.space === p1 ? "padding: 1em;" : "padding: 0.5em")};
`;

const Padded = ({ space = "p1", children, ...rest }) => {
  return (
    <PaddedWrapper space={space} {...rest}>
      {children}
    </PaddedWrapper>
  );
};

export default Padded;
