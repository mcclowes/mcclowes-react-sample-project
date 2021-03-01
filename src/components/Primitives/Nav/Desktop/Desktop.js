import React from "react";

import { DesktopWrapper, LogoWrapper, LinkWrapper, LinksWrapper } from "./csx";

const Logo = (props) => {
  return <LogoWrapper to="/">{props.children}</LogoWrapper>;
};

const Link = (props) => {
  return <LinkWrapper to={props.link.to}>{props.link.text}</LinkWrapper>;
};

const Desktop = (props) => {
  return (
    <DesktopWrapper sizes={[false, false, true, true, true]}>
      <Logo>{props.logo}</Logo>

      <LinksWrapper>
        {props.links
          .filter((link) => link.to !== "/")
          .map((link, i) => (
            <Link key={i} link={link} exact />
          ))}
      </LinksWrapper>
    </DesktopWrapper>
  );
};

export default Desktop;
