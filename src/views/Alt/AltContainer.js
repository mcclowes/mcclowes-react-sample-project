import React, { useState } from "react";
import Alt from "./Alt";
import { Loader } from "../../components/UIKit";

const AltContainer = (props) => {
  // an exammple of a useful hook and loading state
  const [loading, setloading] = useState(true);

  setTimeout(function () {
    if (loading) {
      setLoading(false);
    }
  }, 2000);

  return loading ? <Loader /> : <Alt {...props} />;
};

export default AltContainer;
