import React from "react";
import {
  DropdownWrapper,
  DropdownPlaceholder,
  DropdownOptions,
  DropdownOption
} from "./csx";
import Icon from "../Icon";

const Dropdown = props => {
  const { placeholder, options, open, setOpen, value, setValue } = props;

  return (
    <DropdownWrapper onClick={() => setOpen(!open)}>
      <DropdownPlaceholder value={value}>
        {value || placeholder}

        <Icon icon="TICK" />
      </DropdownPlaceholder>

      {options && (
        <DropdownOptions open={open}>
          {options.map((option, i) => {
            return (
              <DropdownOption
                key={i}
                onClick={() => setValue(option)}
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

export default Dropdown;
