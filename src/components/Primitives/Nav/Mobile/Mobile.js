import React from "react";

import {
  MobileWrapper,
  LogoWrapper,
  BackWrapper,
  LinkWrapper,
  LinksWrapper,
  Overlay,
  NavBar,
} from "./csx";

import Burger from "./Burger";

import { useHistory } from "react-router-dom";

const Back = (props) => {
  return (
    <BackWrapper onClick={props.canGoBack && props.goBack}>
      {props.canGoBack && "<"}
    </BackWrapper>
  );
};

const Logo = (props) => {
  return <LogoWrapper to="/">{props.children}</LogoWrapper>;
};

const Link = (props) => {
  return <LinkWrapper to={props.link.to}>{props.link.text}</LinkWrapper>;
};

const Mobile = (props) => {
  let history = useHistory();
  const canGoBack = history.length > 1;

  return (
    <MobileWrapper sizes={[true, true, false, false, false]}>
      <NavBar>
        <Back canGoBack={canGoBack} goBack={history.goBack} />

        <Logo>{props.logo}</Logo>

        <Burger onClick={props.toggleOpen} open={props.open} />
      </NavBar>

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
    </MobileWrapper>
  );
};

export default Mobile;
