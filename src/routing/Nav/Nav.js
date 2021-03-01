import React from "react";
import NavUtil from "../../components/Primitives/Nav";

const LINKS = [
  {
    to: "/",
    text: "Main",
  },
  {
    to: "/alt",
    text: "Alt",
  },
];

const Nav = () => {
  return <NavUtil logo="mcclowes-react-sample-project" links={LINKS} />;
};

export default Nav;
