import React from "react";
import Button from "./Button";

export default { title: "Button" };

export const empty = () => {
  return <Button />;
};

export const withText = () => {
  return <Button>Hello World</Button>;
};
