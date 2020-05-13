import React from "react";
import Breakpoint from "../Breakpoint";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Nav = (props) => {
  return (
    <>
      <Breakpoint sizes={[true, true]}>
        <Mobile {...props} />
      </Breakpoint>

      <Breakpoint sizes={[false, false, true, true, true]}>
        <Desktop {...props} />
      </Breakpoint>
    </>
  );
};

export default Nav;
