import React from "react";

import { DesktopWrapper, LogoWrapper, LinkWrapper, LinksWrapper } from "./csx";

const Logo = (props) => {
  return <LogoWrapper>{props.children}</LogoWrapper>;
};

const Link = (props) => {
  return <LinkWrapper>{props.link.text}</LinkWrapper>;
};

const Desktop = (props) => {
  return (
    <DesktopWrapper>
      <Logo>{props.logo}</Logo>

      <LinksWrapper>
        {props.links.map((link, i) => (
          <Link key={i} link={link} />
        ))}
      </LinksWrapper>
    </DesktopWrapper>
  );
};

export default Desktop;
