import React from "react";
import { NavWrapper, NavLink } from "./csx";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/" data-active={window.location.pathname === "/"}>
        Main
      </NavLink>

      <NavLink to="/alt" data-active={window.location.pathname === "/alt"}>
        Alt
      </NavLink>
    </NavWrapper>
  );
};

export default Nav;
