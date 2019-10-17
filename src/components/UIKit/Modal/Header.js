import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 1em;
`;

const Header = props => {
  const { children } = props;

  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default Header;
