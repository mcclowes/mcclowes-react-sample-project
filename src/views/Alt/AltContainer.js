import React, { useState } from "react";
import Alt from "./Alt";
import { Loader } from "../../components/UIKit";

const AltContainer = props => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(false);

  return loading ? <Loader /> : <Alt {...props} />;
};

export default AltContainer;
