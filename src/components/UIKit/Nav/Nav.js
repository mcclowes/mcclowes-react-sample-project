import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Nav = (props) => {
  return (
    <>
      <Mobile {...props} />

      <Desktop {...props} />
    </>
  );
};

export default Nav;
