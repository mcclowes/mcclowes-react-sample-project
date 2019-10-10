import React from "react";
import styled from "styled-components";

const PlaceholderWrapper = styled.div`
  width: 5em;
  height: 1em;
  opacity: 0.1;
  background-color: #eee;
`;

const Placeholder = props => {
  return <PlaceholderWrapper {...props} />;
};

export default Placeholder;
