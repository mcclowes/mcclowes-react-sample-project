import React, { useState } from "react";
import Dropdown from "./Dropdown";

const DropdownContainer = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(undefined);

  const { callback } = props;

  const handleClick = value => {
    setValue(value);
    if (callback) {
      callback(value);
    }
  };

  return (
    <Dropdown
      value={value}
      handleClick={handleClick}
      open={open}
      setOpen={setOpen}
      {...props}
    />
  );
};

export default DropdownContainer;
