import React from "react";

import {
  MobileWrapper,
  LogoWrapper,
  BackWrapper,
  LinkWrapper,
  LinksWrapper,
  Overlay,
} from "./csx";

import Burger from "./Burger";

const Back = (props) => {
  return <BackWrapper to="/">{"<"}</BackWrapper>;
};

const Logo = (props) => {
  return <LogoWrapper to="/">{props.children}</LogoWrapper>;
};

const Link = (props) => {
  return <LinkWrapper to={props.link.to}>{props.link.text}</LinkWrapper>;
};

const Mobile = (props) => {
  return (
    <>
      <MobileWrapper>
        <Back />

        <Logo>{props.logo}</Logo>

        <Burger onClick={props.toggleOpen} open={props.open} />
      </MobileWrapper>

      {props.open && (
        <Overlay>
          <LinksWrapper>
            {props.links
              .filter((link) => link.to !== "/")
              .map((link, i) => (
                <Link key={i} link={link} />
              ))}
          </LinksWrapper>
        </Overlay>
      )}
    </>
  );
};

export default Mobile;
