import React from "react";
import SmartContainer from "./SmartContainer";

export default { title: "Smart" };

export const simple = () => {
  return <SmartContainer />;
};

export const withChildren = () => {
  return <SmartContainer>Hello World</SmartContainer>;
};
