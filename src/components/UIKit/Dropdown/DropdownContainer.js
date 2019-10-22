import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import React, { useState } from "react";

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

DropdownContainer.propTypes = {
  callback: PropTypes.func
};

export default DropdownContainer;
