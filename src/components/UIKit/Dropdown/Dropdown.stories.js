import Dropdown from "./DropdownContainer";
import React from "react";

export default { title: "Dropdown" };

export const empty = () => {
  return <Dropdown />;
};

export const withOptions = () => {
  return <Dropdown placeholder="Select..." options={[1, 2, 3, 4, 5]} />;
};

export const withCallback = () => {
  return (
    <Dropdown
      placeholder="Select..."
      options={[1, 2, 3, 4, 5]}
      callback={value => alert("You clicked " + value)}
    />
  );
};
