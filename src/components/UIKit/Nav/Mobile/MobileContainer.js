import React, { useState } from "react";

import Mobile from "./Mobile";

const MobileContainer = (props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    console.log("opening");
    setOpen(!open);
  };

  return <Mobile toggleOpen={toggleOpen} open={open} {...props} />;
};

export default MobileContainer;
