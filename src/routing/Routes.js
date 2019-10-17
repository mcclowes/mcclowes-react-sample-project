import Alt from "../views/Alt";
import Main from "../views/Main";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />

      <Route path="/alt" component={Alt} />
    </Router>
  );
};

export default Routes;
