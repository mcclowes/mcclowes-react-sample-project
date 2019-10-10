import React, { useState } from "react";
import Main from "./Main";

const MainContainer = props => {
  const [loading, setloading] = useState(false);

  return <Main {...props} />;
};

export default MainContainer;
