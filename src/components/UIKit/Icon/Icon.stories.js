import React from "react";
import Icon, { icons } from "./Icon";

export default { title: "Icon" };

export const simple = () => {
  return <Icon icon="TICK" />;
};

export const withPath = () => {
  return <Icon path={icons.TICK} />;
};

export const all = () => {
  return (
    <>
      {Object.values(icons).map(icon => (
        <Icon path={icon} />
      ))}
    </>
  );
};
