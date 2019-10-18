import React, { useState } from "react";
import Dropdown from "./Dropdown";

const DropdownContainer = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(undefined);

  return (
    <Dropdown
      value={value}
      setValue={value => {
        setValue(value);
        props.callback(value);
      }}
      open={open}
      setOpen={setOpen}
      {...props}
    />
  );
};

export default DropdownContainer;
