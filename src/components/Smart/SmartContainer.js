import React, { useState } from "react";
import Smart from "./Smart";

const SmartContainer = props => {
  const [clicked, setClicked] = useState(false);

  return <Smart clicked={clicked} setClicked={setClicked} {...props} />;
};

export default SmartContainer;
