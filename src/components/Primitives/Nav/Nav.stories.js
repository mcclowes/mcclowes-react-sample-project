import React from "react";
import Nav from "./index";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default { title: "Nav" };

const links = [
  {
    to: "test1",
    text: "Link 1",
  },
  {
    to: "test2",
    text: "Link 2",
  },
];

export const simple = () => {
  return (
    <div>
      <Router>
        <Nav links={links} logo={"mcclowes"} />

        <Route exact path="/" component={<div>Hello World</div>} />

        <Route path="/alt" component={<div>Another view</div>} />
      </Router>
    </div>
  );
};
