import React, { useState } from "react";
import Smart from "./Smart";

const SmartContainer = (props) => {
  const [active, setActive] = useState(false);

  return <Smart active={active} setActive={setActive} {...props} />;
};

export default SmartContainer;
