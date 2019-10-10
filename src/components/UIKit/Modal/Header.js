import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div``;

const Header = props => {
  const { children, ...rest } = props;

  return <HeaderWrapper {...rest}>{children}</HeaderWrapper>;
};

export default Header;
