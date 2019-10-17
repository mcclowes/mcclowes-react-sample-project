import React from "react";
import Button from "./Button";

export default { title: "Button" };

export const simple = () => {
  return <Button />;
};

export const withChildren = () => {
  return <Button>Hello World</Button>;
};
