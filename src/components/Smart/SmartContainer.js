import React, { useState } from "react";
import Smart from "./Smart";

const SmartContainer = props => {
  const [loading, setloading] = useState(false);

  return <Smart {...props} />;
};

export default SmartContainer;
