import Button from "./Button";
import Icon from "../Icon";
import React from "react";

export default { title: "Button" };

export const empty = () => {
  return <Button />;
};

export const withText = () => {
  return <Button>Hello World</Button>;
};

export const withTextProp = () => {
  return <Button text="Hello World" />;
};

export const withIcon = () => {
  return (
    <Button>
      <Icon icon="TICK" />
      Hello World
    </Button>
  );
};

export const subtle = () => {
  return <Button subtle={true}>Hello World</Button>;
};
