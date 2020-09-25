import Icon from "../Icon";
import PropTypes from "prop-types";
import React from "react";

import {
  DropdownWrapper,
  DropdownPlaceholder,
  DropdownOptions,
  DropdownOption,
} from "./csx";

const Dropdown = (props) => {
  const { placeholder, options, open, setOpen, value, handleClick } = props;

  return (
    <DropdownWrapper onClick={() => setOpen(!open)}>
      <DropdownPlaceholder value={value} open={open}>
        {value === undefined ? placeholder : value}

        <Icon icon="DOWN" />
      </DropdownPlaceholder>

      {options && (
        <DropdownOptions open={open}>
          {options.map((option, i) => {
            return (
              <DropdownOption
                key={i}
                onClick={() => handleClick(option)}
                selected={value === option}
              >
                {option}
              </DropdownOption>
            );
          })}
        </DropdownOptions>
      )}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  handleClick: PropTypes.func,
  open: PropTypes.bool,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  setOpen: PropTypes.func,
  value: PropTypes.any,
};

export default Dropdown;
