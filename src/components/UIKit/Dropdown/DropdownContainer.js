import React, { useState } from "react";
import Dropdown from "./Dropdown";

const DropdownContainer = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(undefined);

  const { callback } = props;

  return (
    <Dropdown
      value={value}
      setValue={value => {
        setValue(value);
        callback(value);
      }}
      open={open}
      setOpen={setOpen}
      {...props}
    />
  );
};

export default DropdownContainer;
