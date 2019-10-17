import React from "react";
import Loader from "./Loader";

export default { title: "Loader" };

export const simple = () => {
  return <Loader />;
};

export const withChildren = () => {
  return <Loader>Hello World</Loader>;
};
